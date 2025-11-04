import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  return (
    <section className={cn("py-16 md:py-24 text-center bg-muted", className)}>
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
