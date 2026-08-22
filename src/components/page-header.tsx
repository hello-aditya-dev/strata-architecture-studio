export default function PageHeader({
  index,
  label,
  title,
  intro,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <div className="container-site pb-14 pt-36 md:pb-20 md:pt-48">
      <div className="flex items-center gap-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-concrete">
          [ {index} ]
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-concrete">
          {label}
        </p>
        <span className="h-px flex-1 bg-line" />
      </div>
      <h1 className="display mt-10 max-w-4xl text-5xl leading-[1.02] sm:text-6xl md:text-7xl">
        {title}
      </h1>
      {intro && (
        <p className="mt-8 max-w-xl text-base leading-relaxed text-concrete md:text-lg">
          {intro}
        </p>
      )}
    </div>
  );
}
