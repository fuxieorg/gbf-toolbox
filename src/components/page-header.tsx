type PageHeaderProps = {
  title: string;
  description: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header>
      <h1 className="line-clamp-1 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {title}
      </h1>
      <p className="mt-4 line-clamp-2 text-lg text-muted-foreground">
        {description}
      </p>
    </header>
  );
}
