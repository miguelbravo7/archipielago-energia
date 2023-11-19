import { Icon } from "@/components/Icon";
import { SecondaryButton } from "@/components/buttons/SecondaryButton";

const services = [
  {
    service: "UI/UX Design",
    text: "Transforming ideas into visually compelling and functional designs that users love.",
    icon: "box",
  },
  {
    service: "Web Development",
    text: "Crafting robust and responsive websites that seamlessly operate across devices.",
    icon: "circles",
  },
  {
    service: "Mobile App Development",
    text: "Creating intuitive, feature-rich mobile apps that engage and retain users.",
    icon: "circleSquare",
  },
  {
    service: "Digital Marketing",
    text: "Driving brand awareness and growth through tailored digital marketing strategies.",
    icon: "diamond",
  },
  {
    service: "Branding Services",
    text: "Building strong, cohesive brand identities that resonate with target audiences.",
    icon: "stack",
  },
  {
    service: "SEO Optimization",
    text: "Enhancing your online visibility and ranking through proven SEO strategies.",
    icon: "triangle",
  },
];

export const ServiceList = () => {
  return (
    <section className="bg-white px-4 pb-10 pt-10 sm:px-6 md:pb-12 md:pt-12 lg:px-8">
      <div className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center">
        <div className="flex w-full flex-wrap">
          {/* Section header with button */}
          <div className="relative flex w-full lg:w-1/3">
            <div className="relative flex w-full">
              <div className="relative flex w-full flex-wrap lg:flex-col">
                <div className="relative w-full">
                  <p className="inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-gradient-to-r from-orange-400 to-orange-300 px-6 py-2 text-sm font-medium tracking-wide text-stone-700">
                    What we offer
                  </p>
                  <h2 className="relative mt-6 w-full text-left text-3xl font-extrabold text-stone-700 sm:text-4xl md:text-5xl">
                    We've Got You <br /> Covered
                  </h2>
                </div>
                <div className="mt-8 flex text-left lg:mt-10">
                  <SecondaryButton href="/work">View work</SecondaryButton>
                </div>
              </div>
            </div>
          </div>
          {/* 2x6 features grid */}
          <div className="relative mt-16 flex w-full lg:w-2/3 lg:pl-8">
            <div className="grid w-full gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16">
              {services.map((item, index) => (
                <div
                  data-aos="fade-right"
                  data-aos-delay={index % 2 !== 1 ? "0" : "200"}
                  data-aos-duration="500"
                  key={`service-${index}`}
                  className="relative flex w-full flex-col"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r from-orange-400 to-orange-300 shadow-xl">
                    <Icon name={item.icon} className="h-8 w-8 text-stone-700" />
                  </span>
                  <h4 className="mt-4 text-2xl font-semibold text-stone-700">
                    {item.service}
                  </h4>
                  <p className="mt-1 max-w-sm text-lg leading-relaxed text-stone-700">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
