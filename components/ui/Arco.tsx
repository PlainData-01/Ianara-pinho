type ArcoProps = {
  className?: string;
  cor?: string;
};

export function Arco({ className = "", cor = "currentColor" }: ArcoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 38 Q60 0 120 38"
        stroke={cor}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArcoMini({ className = "", cor = "currentColor" }: ArcoProps) {
  return (
    <svg
      className={`inline-block h-4 w-4 align-middle ${className}`}
      viewBox="0 0 24 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 11 Q12 0 24 11"
        stroke={cor}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
