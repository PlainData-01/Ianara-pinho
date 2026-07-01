"""Gera ianara-pinho-hero.png: recorte sem fundo e centralizado."""
from __future__ import annotations

import io
from pathlib import Path

import numpy as np
from PIL import Image
from rembg import new_session, remove

ROOT = Path(__file__).resolve().parents[1]
IMAGES = ROOT / "public" / "images"
OUT = IMAGES / "ianara-pinho-hero.png"

# Prioridade: arquivo enviado pelo cliente; senão recorte do banner desktop; senão foto antiga.
SOURCES = [
    IMAGES / "ianara-pinho-original.png",
    IMAGES / "ianara-pinho-original.jpg",
    IMAGES / "ianara-pinho-fresh.jpg",
    IMAGES / "ianara-pinho.jpg",
]
DESKTOP_BANNER = IMAGES / "hero-banner-desktop.webp"


def extract_from_desktop_banner() -> Path:
    """Recorta o retrato (moletom branco, fundo azul) do banner desktop."""
    out = IMAGES / "ianara-pinho-original.png"
    img = Image.open(DESKTOP_BANNER).convert("RGB")
    w, h = img.size
    crop = img.crop((0, 0, int(w * 0.32), h))
    crop.save(out)
    return out

SESSION = new_session("u2net_human_seg")


def pick_source() -> Path:
    for path in SOURCES:
        if path.exists():
            return path
    if DESKTOP_BANNER.exists():
        return extract_from_desktop_banner()
    raise FileNotFoundError("Nenhuma foto fonte encontrada em public/images/")


def is_background(r: int, g: int, b: int) -> bool:
    warmth = r - b
    blue_bg = b > r + 12 and b > 70
    warm_bg = r > 105 and g > 70 and warmth > 30 and (r - g) < 100
    return blue_bg or warm_bg


def clean_fringe(img: Image.Image) -> Image.Image:
    data = np.array(img)
    r, g, b, a = data[:, :, 0], data[:, :, 1], data[:, :, 2], data[:, :, 3]

    bg_mask = np.vectorize(lambda rr, gg, bb: is_background(int(rr), int(gg), int(bb)))(
        r, g, b
    )
    data[(bg_mask & (a < 250)) | ((a < 40) & bg_mask), 3] = 0

    return Image.fromarray(data)


def center_on_canvas(img: Image.Image, padding_ratio: float = 0.05) -> Image.Image:
    bbox = img.getbbox()
    if not bbox:
        return img
    cropped = img.crop(bbox)
    w, h = cropped.size
    pad_x = int(w * padding_ratio)
    pad_y = int(h * padding_ratio)
    pad_top = int(h * 0.10)
    canvas = Image.new(
        "RGBA",
        (w + pad_x * 2, h + pad_y + pad_top),
        (0, 0, 0, 0),
    )
    canvas.paste(cropped, (pad_x, pad_top), cropped)
    return canvas


def main() -> None:
    src = pick_source()
    raw = remove(src.read_bytes(), session=SESSION)
    img = center_on_canvas(clean_fringe(Image.open(io.BytesIO(raw)).convert("RGBA")))
    img.save(OUT)
    print(f"source: {src.name}")
    print(f"saved: {OUT} ({img.size[0]}x{img.size[1]})")


if __name__ == "__main__":
    main()
