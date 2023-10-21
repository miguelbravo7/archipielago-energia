import { Icon } from "@/components/Icon";

const values = [
  {
    value: "Quality",
    text: "We strive for excellence in all facets of our work, assuring high-end results.",
    icon: "flame",
  },
  {
    value: "Improvement",
    text: "We are committed to learning, adapting, and constantly elevating our game.",
    icon: "trendingUp",
  },
  {
    value: "Team work",
    text: "We believe in collective efforts, fostering a culture of collaboration and support.",
    icon: "users",
  },
];

export const Values = () => {
  return (
    <section className="px-4 pb-12 pt-10 sm:px-6 md:pb-16 md:pt-12 lg:px-8">
      <div className="mx-auto w-full max-w-screen-xl">
        {/* Section text */}
        <div className="mx-auto w-full max-w-xl text-center md:max-w-2xl lg:max-w-3xl">
          <p className="inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-gradient-to-r from-orange-400 to-orange-300 px-6 py-2 text-sm font-medium tracking-wide text-stone-700">
            Our values
          </p>
          <h2 className="mt-6 text-3xl font-extrabold text-stone-700 sm:text-4xl md:text-5xl">
            The values that guide and define our work
          </h2>
          <p className="mt-6 text-xl text-stone-700">
            We are driven by a unique ethos, firmly rooted in a cohesive set of
            shared values that guide all our decisions and actions.
          </p>
        </div>

        {/* Value cards */}
        <div className="mt-12 grid gap-y-8 lg:mt-16 lg:grid-cols-3 lg:gap-x-6 2xl:gap-x-12">
          {values.slice(0, 3).map((item, index) => (
            <div
              key={`value-${index}`}
              className="mx-auto w-full max-w-lg rounded-3xl bg-orange-300 px-4 py-14 shadow-xl lg:px-6 lg:py-16 xl:px-12"
            >
              <div className="mx-auto max-w-sm text-center">
                <span className="mx-auto flex h-18 w-18 items-center justify-center rounded-3xl bg-gradient-to-r from-orange-200 to-white shadow-inner">
                  <Icon
                    name={item.icon}
                    className="mx-auto h-10 w-10 text-stone-700"
                  />
                </span>
                <div className="mt-8 text-2xl font-bold text-stone-700 ">
                  {item.value}
                </div>
                <p className="mt-3 text-lg leading-relaxed text-stone-700">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
