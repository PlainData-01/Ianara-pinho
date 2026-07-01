"use client";

import { useState } from "react";
import { CONTACT, UNITS, whatsappHref } from "@/lib/constants";

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-white/60 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/70 focus:border-brass focus:ring-1 focus:ring-brass";

export default function ContactForm() {
  const [state, setState] = useState({
    name: "",
    phone: "",
    unit: UNITS[0].name as string,
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Olá! Meu nome é ${state.name || "(sem nome)"}.
Gostaria de agendar uma avaliação na ${state.unit}.
Telefone: ${state.phone || "(não informado)"}.
${state.message ? `Mensagem: ${state.message}` : ""}`;
    window.open(whatsappHref(text), "_blank", "noopener");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Nome
          </label>
          <input
            id="name"
            type="text"
            required
            value={state.name}
            onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
            placeholder="Seu nome"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Telefone / WhatsApp
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={state.phone}
            onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
            placeholder="(61) 90000-0000"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="unit" className="mb-1.5 block text-sm font-medium text-ink">
          Unidade de preferência
        </label>
        <select
          id="unit"
          value={state.unit}
          onChange={(e) => setState((s) => ({ ...s, unit: e.target.value }))}
          className={inputClass}
        >
          {UNITS.map((u) => (
            <option key={u.slug}>{u.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Como podemos ajudar?
        </label>
        <textarea
          id="message"
          rows={4}
          value={state.message}
          onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
          placeholder="Conte brevemente o que você precisa"
          className={inputClass}
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        Enviar pelo WhatsApp
      </button>
      <p className="text-center text-xs text-ink-soft">
        Ao enviar, você será direcionado ao WhatsApp {CONTACT.whatsappNumber}. Resposta em horário
        comercial.
      </p>
    </form>
  );
}
