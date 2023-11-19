"use client";
import SimpleCalculator from "@/components/ui/forms/calculator-simple";
import AdvancedCalculator from "@/components/ui/forms/calculator-advanced";
import { SocialLink } from "@/components/SocialLink";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export const metadata = {
  title: "Contact us - Archipielago",
  description:
    "Get in touch with our team to discuss how we can help bring your creative vision to life. Reach out to us for collaborative, innovative, and strategic web design and development services.",
};

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-16">
          <div className="">
            <div className="flex flex-col items-start justify-between sm:items-center lg:items-start">
              {/* Section header */}
              <div>
                <div className="w-full text-left sm:text-center lg:text-left">
                  <p className="inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-gradient-to-r from-orange-400 to-orange-300 px-6 py-2 text-sm font-medium tracking-wide text-stone-700">
                    Contact
                  </p>
                </div>
                <div className="mt-4 w-full text-left sm:text-center md:mt-5 lg:text-left">
                  <h1 className="text-4xl font-extrabold text-stone-700 sm:text-5xl md:text-6xl">
                    Get in touch
                  </h1>
                  <p className="mx-auto mt-3 max-w-lg text-xl text-stone-700 sm:max-w-2xl md:mt-5">
                    We'd love to hear from you. Fill in the form and we'll get
                    back to you shortly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row-span-2">
            <div className="flex flex-col items-start justify-between sm:items-center lg:items-start">
              {/* Calculator form card */}
              <div className="mt-12 w-full lg:mt-0">
                <div className="mx-auto w-full rounded-2xl bg-orange-300 px-1 py-2 shadow-xl">
                  {/* Calculator form */}

                  <Tabs defaultValue="simple">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="simple">Simple</TabsTrigger>
                      <TabsTrigger value="advanced">Advanced</TabsTrigger>
                    </TabsList>
                    <TabsContent value="simple">
                      <SimpleCalculator setIsLoading={setIsLoading} />
                    </TabsContent>
                    <TabsContent value="advanced">
                      <AdvancedCalculator setIsLoading={setIsLoading} />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col items-start justify-between sm:items-center lg:items-start">
              {/* Result section */}

              {/* Social media links */}
              <div className="mt-8 w-full sm:mt-10 lg:mt-0">
                <h6 className="text-left text-lg font-semibold text-stone-700 sm:text-center lg:text-left">
                  Follow us
                </h6>
                {/* Links container */}
                <div className="mt-3 flex justify-start space-x-4 sm:justify-center lg:justify-start">
                  <SocialLink href="#0" icon="instagram" />
                  <SocialLink href="#0" icon="facebook" />
                  <SocialLink href="#0" icon="twitter" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
