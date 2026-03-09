type SectionTitleProps = {
  eyebrow: string;
  title: string;
};

export function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium tracking-[0.2em] text-[color:var(--color-accent-soft)] uppercase">
        {eyebrow}
      </p>
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-[color:var(--color-text-strong)] sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
