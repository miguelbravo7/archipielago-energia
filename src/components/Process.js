import { Icon } from "@/components/Icon";

const steps = [
  {
    label: "1. Collect Ideas",
    description:
      "We gather comprehensive insights about your product to fully understand your unique needs and vision.",
    icon: "clipboardList",
  },
  {
    label: "2. Design Concept",
    description:
      "We creatively transform your vision and ideas into design drafts. We iterate until you are satisfied.",
    icon: "artboard",
  },
  {
    label: "3. Finalize Product",
    description:
      "Upon your approval, we finalize and refine the design and launch your uniquely tailored product to the market.",
    icon: "rocket",
  },
];

export const Process = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
      {/* Section text */}
      <div className="mx-auto w-full max-w-xl text-center md:max-w-2xl lg:max-w-3xl">
        <p className="inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-gradient-to-r from-orange-400 to-orange-300 px-6 py-2 text-sm font-medium tracking-wide text-stone-700">
          Our process
        </p>
        <h2 className="mt-6 text-3xl font-extrabold text-stone-700 sm:text-4xl md:text-5xl">
          Experience our simple design process
        </h2>
        <p className="mt-6 text-xl text-stone-700">
          Uncover the essence of your brand, through our highly collaborative
          and intuitively structured design process.
        </p>
      </div>
      {/* Process steps */}
      <div className="mx-auto mt-12 grid max-w-xl gap-10 lg:mt-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-12">
        {steps.slice(0, 3).map((step, index) => (
          <div
            data-aos="zoom-y-out"
            data-aos-delay={`${150 * index}`}
            key={`service-process-setp-${index}`}
            className="w-full"
          >
            <span className="mx-auto flex h-18 w-18 items-center justify-center rounded-3xl bg-gradient-to-r from-orange-400 to-orange-300 shadow-xl">
              {/* TablerIcon name: clipboard-list */}
              <Icon name={step.icon} className="h-10 w-10 text-stone-700" />
            </span>
            <h3 className="mt-5 text-center text-2xl font-semibold text-stone-700">
              {step.label}
            </h3>
            <p className="mt-2 text-center text-lg leading-relaxed text-stone-700">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
