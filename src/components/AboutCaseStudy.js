export const AboutCaseStudy = ({ data }) => {
  return (
    <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-screen-md text-center lg:max-w-screen-xl">
        <p className="inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-gradient-to-r from-orange-400 to-orange-300 px-6 py-2 text-sm font-medium tracking-wide text-stone-700">
          {data.tagline}
        </p>
        {/* Project description */}
        <div className="mx-auto mt-6 flex w-full flex-wrap text-center">
          <div className="mx-auto w-full lg:w-4/5">
            <p className="text-2xl font-medium tracking-tight text-stone-700 sm:text-3xl lg:text-4xl lg:leading-tight">
              {data.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
