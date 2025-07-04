import React from "react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: `<svg width="41" height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 40.5px; height: 36px">
        <g clip-path="url(#clip0_7_126)">
          <path d="M28.125 0.5H12.375C10.5117 0.5 8.99297 2.03281 9.06328 3.88906C9.07734 4.26172 9.09141 4.63438 9.1125 5H1.6875C0.752344 5 0 5.75234 0 6.6875C0 13.1984 2.35547 17.7266 5.51953 20.7992C8.63437 23.8297 12.4313 25.3555 15.2297 26.1289C16.875 26.5859 18 27.957 18 29.3352C18 30.8047 16.8047 32 15.3352 32H13.5C12.2555 32 11.25 33.0055 11.25 34.25C11.25 35.4945 12.2555 36.5 13.5 36.5H27C28.2445 36.5 29.25 35.4945 29.25 34.25C29.25 33.0055 28.2445 32 27 32H25.1648C23.6953 32 22.5 30.8047 22.5 29.3352C22.5 27.957 23.618 26.5789 25.2703 26.1289C28.0758 25.3555 31.8727 23.8297 34.9875 20.7992C38.1445 17.7266 40.5 13.1984 40.5 6.6875C40.5 5.75234 39.7477 5 38.8125 5H31.3875C31.4086 4.63438 31.4227 4.26875 31.4367 3.88906C31.507 2.03281 29.9883 0.5 28.125 0.5ZM3.43828 8.375H9.37266C10.0125 14.7102 11.4258 18.943 13.0219 21.7766C11.2711 21.0031 9.45 19.9133 7.875 18.3805C5.625 16.1938 3.79688 13.0367 3.44531 8.375H3.43828ZM32.632 18.3805C31.057 19.9133 29.2359 21.0031 27.4852 21.7766C29.0812 18.943 30.4945 14.7102 31.1344 8.375H37.0688C36.7102 13.0367 34.882 16.1938 32.6391 18.3805H32.632Z" fill="#39FF14"/>
        </g>
        <defs>
          <clipPath id="clip0_7_126">
            <path d="M0 0.5H40.5V36.5H0V0.5Z" fill="white"/>
          </clipPath>
        </defs>
      </svg>`,
      title: "Achievement System",
      description:
        "Earn badges from Beginner to Expert as you master different topics",
    },
    {
      icon: `<svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 40.5px; height: 36px">
        <g clip-path="url(#clip0_7_129)">
          <path d="M13.5938 0.5C15.7664 0.5 17.5312 2.26484 17.5312 4.4375V32.5625C17.5312 34.7352 15.7664 36.5 13.5938 36.5C11.5617 36.5 9.88828 34.9602 9.67734 32.9773C9.31172 33.0758 8.925 33.125 8.53125 33.125C6.04922 33.125 4.03125 31.107 4.03125 28.625C4.03125 28.1047 4.12266 27.5984 4.28437 27.1344C2.16094 26.3328 0.65625 24.2797 0.65625 21.875C0.65625 19.632 1.97109 17.6914 3.87656 16.7914C3.26484 16.025 2.90625 15.0547 2.90625 14C2.90625 11.8414 4.425 10.0414 6.45 9.59844C6.3375 9.21172 6.28125 8.79688 6.28125 8.375C6.28125 6.27266 7.72969 4.50078 9.67734 4.00859C9.88828 2.03984 11.5617 0.5 13.5938 0.5ZM23.7188 0.5C25.7508 0.5 27.4172 2.03984 27.6352 4.00859C29.5898 4.50078 31.0312 6.26562 31.0312 8.375C31.0312 8.79688 30.975 9.21172 30.8625 9.59844C32.8875 10.0344 34.4062 11.8414 34.4062 14C34.4062 15.0547 34.0477 16.025 33.4359 16.7914C35.3414 17.6914 36.6562 19.632 36.6562 21.875C36.6562 24.2797 35.1516 26.3328 33.0281 27.1344C33.1898 27.5984 33.2812 28.1047 33.2812 28.625C33.2812 31.107 31.2633 33.125 28.7812 33.125C28.3875 33.125 28.0008 33.0758 27.6352 32.9773C27.4242 34.9602 25.7508 36.5 23.7188 36.5C21.5461 36.5 19.7812 34.7352 19.7812 32.5625V4.4375C19.7812 2.26484 21.5461 0.5 23.7188 0.5Z" fill="#667EEA"/>
        </g>
        <defs>
          <clipPath id="clip0_7_129">
            <path d="M0.65625 0.5H36.6562V36.5H0.65625V0.5Z" fill="white"/>
          </clipPath>
        </defs>
      </svg>`,
      title: "AI-Powered",
      description:
        "Smart algorithms analyze videos to create relevant, challenging questions",
    },
    {
      icon: `<svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 40.5px; height: 36px">
        <g clip-path="url(#clip0_7_132)">
          <path d="M4.82812 5C4.82812 3.75547 3.82266 2.75 2.57812 2.75C1.33359 2.75 0.328125 3.75547 0.328125 5V28.625C0.328125 31.7328 2.84531 34.25 5.95312 34.25H34.0781C35.3227 34.25 36.3281 33.2445 36.3281 32C36.3281 30.7555 35.3227 29.75 34.0781 29.75H5.95312C5.33437 29.75 4.82812 29.2437 4.82812 28.625V5ZM33.4172 11.0891C34.2961 10.2102 34.2961 8.78281 33.4172 7.90391C32.5383 7.025 31.1109 7.025 30.232 7.90391L22.8281 15.3148L18.7922 11.2789C17.9133 10.4 16.4859 10.4 15.607 11.2789L7.73203 19.1539C6.85313 20.0328 6.85313 21.4602 7.73203 22.3391C8.61094 23.218 10.0383 23.218 10.9172 22.3391L17.2031 16.0602L21.2391 20.0961C22.118 20.975 23.5453 20.975 24.4242 20.0961L33.4242 11.0961L33.4172 11.0891Z" fill="#FF073A"/>
        </g>
        <defs>
          <clipPath id="clip0_7_132">
            <path d="M0.328125 0.5H36.3281V36.5H0.328125V0.5Z" fill="white"/>
          </clipPath>
        </defs>
      </svg>`,
      title: "Progress Tracking",
      description:
        "Monitor your learning journey with detailed analytics and insights",
    },
  ];

  return (
    <section className="flex justify-center items-center px-36 py-20 w-full border-0 border border-solid h-[456px] max-md:px-10 max-md:py-20 max-sm:px-5 max-sm:py-16 max-sm:h-auto">
      <div className="flex flex-col gap-16 justify-center items-start border-0 border border-solid bg-black bg-opacity-0 h-[296px] w-[1152px] max-md:w-full max-md:max-w-[1000px] max-sm:gap-10 max-sm:h-auto">
        <div className="flex justify-center items-center w-full h-10 border-0 border border-solid bg-black bg-opacity-0">
          <h2 className="text-4xl leading-10 text-center bg-clip-text max-sm:text-3xl max-sm:leading-8 text-white">
            POWER-UPS & FEATURES
          </h2>
        </div>
        <div className="flex gap-8 justify-center items-start h-48 border-0 border border-solid bg-black bg-opacity-0 w-[1152px] max-md:flex-col max-md:gap-6 max-md:items-center max-md:w-full max-md:h-auto max-sm:gap-5 max-sm:h-auto">
          {features.map((feature, index) => (
            <article
              key={index}
              className="relative p-6 h-48 rounded-xl border-0 border border-solid shadow-sm w-[363px] max-md:w-full max-md:max-w-[400px] max-sm:p-5 max-sm:h-auto bg-gray-900"
            >
              <div className="flex items-center h-10 border-0 border border-solid bg-black bg-opacity-0 w-[315px]">
                <div dangerouslySetInnerHTML={{ __html: feature.icon }} />
              </div>
              <h3 className="absolute left-6 text-xl font-bold leading-7 text-white top-[76px] max-sm:static max-sm:mt-4 max-sm:mb-3">
                {feature.title}
              </h3>
              <p className="absolute left-6 h-12 text-base leading-6 text-gray-300 top-[118px] w-[292px] max-sm:static max-sm:w-full max-sm:h-auto">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
