"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";

const pricingTiers = [
  {
    title: "Kompyuter savodxonligi",
    height: true,
    buttonText: "Kursga yozilish",
    popular: false,
    inverse: false,
    features: [
      "Davomiyligi: 1 oy",
      "Joylar soni: 10",
      "Turi: offlayn",
      "O`quv kompyuterlaridan foydalanish",
    ],
  },
  {
    title: "Front-end",
    buttonText: "Kursga yozilish",
    popular: false,
    inverse: false,
    features: [
      "Davomiyligi: 7 oy",
      "Joylar soni: 10",
      "Modullar soni: 3",
      "Turi: offlayn",
      "O`quv kompyuterlaridan foydalanish",
    ],
  },
  {
    title: "Back-end",
    buttonText: "Kursga yozilish",
    popular: false,
    inverse: false,
    features: [
      "Davomiyligi: 7 oy",
      "Joylar soni: 10",
      "Modullar soni: 3",
      "Turi: offlayn",
      "O`quv kompyuterlaridan foydalanish",
    ],
  },
  {
    title: "Foundation",
    buttonText: "Kursga yozilish",
    popular: false,
    inverse: false,
    features: [
      "Davomiyligi: 7 oy",
      "Joylar soni: 10",
      "Modullar soni: 1",
      "Turi: offlayn",
      "O`quv kompyuterlaridan foydalanish",
    ],
  },
  {
    title: "Kiber xavfsizlik",
    buttonText: "Kursga yozilish",
    popular: false,
    inverse: false,
    features: [
      "Davomiyligi: 7 oy",
      "Joylar soni: 10 ta",
      "Export capabilities",
      "Turi: offlayn",
      "O`quv kompyuterlaridan foydalanish",
    ],
  },
];

export const Pricing = () => {
  return (
    <>
      <section id="courses" className="py-24 bg-white">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-title">Bizning Kurslar</h2>
            <p className="section-desc mt-5">
              Bizning kurslarimizdan birini tanlang va o`z bilimlarizni oshiring va rivojlang ularni tanlang.
            </p>
          </div>
          <div className="flex flex-wrap flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end justify-between">
            {pricingTiers.map(
              ({
                title,
                buttonText,
                inverse,
                features,
                height,
              }) => (
                <div
                  key={title}
                  className={twMerge(
                    "p-10 border border-solid border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#eaeaea] max-w-xs w-full",
                    inverse === true && "border-black bg-black text-white"
                  )}
                >
                  <div className="flex justify-between">
                    <h3
                      className={twMerge(
                        "text-lg font-bold text-black",
                      )}
                    >
                      <span className="text-4xl font-bold tracking-tighter leading-none">
                      {title}
                    </span>
                    </h3>
                  </div>
                  <ul className="flex flex-col gap-5 mt-8">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm flex items-center gap-4"
                      >
                        <CheckIcon className="h-6 w-6" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={twMerge(
                      "btn btn-primary w-full",
                      height ? "mt-[36px]" : "mt-[30px]",
                      inverse === true && "bg-white text-black"
                    )}
                  >
                    {buttonText}
                  </button>
                </div>
              )
            )}
            <div
              className={twMerge("p-10 flex-1 rounded-3xl max-w-xs w-full")}
            />
          </div>
        </div>
      </section>
    </>
  );
};
