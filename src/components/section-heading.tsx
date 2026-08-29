type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as = "h2",
}: Props) {
  const Heading = as;
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">{eyebrow}</p>
      ) : null}
      <Heading className="mt-3 text-3xl sm:text-4xl">{title}</Heading>
      {description ? (
        <p className="text-balance-pretty mt-4 text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
