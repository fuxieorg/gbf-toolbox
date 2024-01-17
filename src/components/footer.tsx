export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {currentYear} Granblue Fantasy Toolbox. Built by{" "}
          <a
            href="https://fuxie.org/"
            target="_blank"
            className="font-medium underline underline-offset-4"
            rel="noreferrer"
          >
            Fu Xie
          </a>
          . The source code is available on{" "}
          <a
            target="_blank"
            href="https://github.com/fuxieorg/gbf-toolbox"
            className="font-medium underline underline-offset-4"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
