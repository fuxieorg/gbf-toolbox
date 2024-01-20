import PageHeader from "@/components/page-header";
import { RESOURCES_DATA } from "./data";
import ResourceItem from "./components/resource-item";

export default function Page() {
  return (
    <>
      <PageHeader
        title="Resources"
        description="A list of resources for Granblue Fantasy."
      />
      <div className="mt-16 space-y-12">
        {RESOURCES_DATA.map((resource) => {
          const { id, title, data } = resource;
          return (
            <section key={id}>
              <header>
                <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                  {title}
                </h2>
              </header>
              <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {data.map((item) => {
                  const { id, icon, link, title, language, description } = item;
                  return (
                    <a href={link} key={id} target="_blank">
                      <ResourceItem
                        title={title}
                        icon={icon}
                        language={language}
                        description={description}
                      />
                    </a>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
