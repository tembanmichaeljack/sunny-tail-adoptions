type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl sm:text-4xl">{title}</h2>
      {description ? (
        <p className="text-balance-pretty mt-4 text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
