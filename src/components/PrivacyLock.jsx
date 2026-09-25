export default function PrivacyLock({ className = "" }) {
  return (
    <svg
      className={className}
      width="64"
      height="68"
      viewBox="0 0 64 68"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M22 30V18a10 10 0 0 1 20 0v12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 20 52 40 32 60 12 40Z"
        fill="var(--privacy-icon-background, #f7edf2)"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="m32 28 12 12-12 12-12-12Z" fill="currentColor" />
      <circle
        cx="32"
        cy="38"
        r="2.4"
        fill="var(--privacy-icon-background, #f7edf2)"
      />
      <path
        d="M32 39v5"
        stroke="var(--privacy-icon-background, #f7edf2)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
