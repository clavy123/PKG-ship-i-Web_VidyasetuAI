import React from 'react';

export const HeroSection = () => {
  return (
    <main className="relative w-full border-0 border-solid bg-black bg-opacity-0 h-[600px] max-sm:h-auto max-sm:min-h-[500px]">
      <div className="absolute top-0 left-0 w-full border-0 border-solid h-[600px]" />
      <div className="absolute left-2/4 w-full border-0 border-solid -translate-x-2/4 bg-black bg-opacity-0 h-[500px] max-w-[709px] top-[50px] max-md:px-5 max-md:py-0 max-md:max-w-[90%] max-sm:static max-sm:px-5 max-sm:py-10 max-sm:h-auto">
        <div className="relative w-full border-0 border-solid bg-black bg-opacity-0 h-[244px] max-sm:h-auto">
          <h1 className="absolute left-2/4 text-7xl text-center bg-clip-text -translate-x-2/4 h-[91px] leading-[72px] top-[-29px] w-[431px] max-md:w-full max-md:text-5xl max-md:leading-10 max-sm:static max-sm:mb-5 max-sm:text-4xl max-sm:leading-9 text-white">
            LEVEL UP
          </h1>
          <h2 className="absolute left-2/4 text-5xl leading-10 text-center text-white -translate-x-2/4 h-[59px] top-[73px] w-[539px] max-md:w-full max-md:text-3xl max-md:leading-8 max-sm:static max-sm:mb-5 max-sm:text-2xl max-sm:leading-6">
            Your Learning Game
          </h2>
          <p className="absolute left-2/4 text-xl leading-7 text-center text-gray-300 -translate-x-2/4 top-[155px] w-[595px] max-md:w-full max-md:text-lg max-sm:static max-sm:mb-10 max-sm:text-base max-sm:leading-6">
            Transform any YouTube video into an epic quiz adventure. Challenge yourself, earn badges, and become the ultimate knowledge champion!
          </p>
        </div>
        <button className="inline-flex absolute left-2/4 gap-3 items-center pt-3.5 pr-14 pb-5 pl-12 rounded-full border-0 border-solid shadow-sm -translate-x-2/4 cursor-pointer top-[439px] max-sm:static max-sm:mx-auto max-sm:my-0 max-sm:w-full max-sm:max-w-[280px] bg-white text-black">
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 20.513px; height: 20.513px">
                <g clip-path="url(#clip0_7_40)">
                  <path d="M6.72699 15.6516L5.48898 14.4136C5.14842 14.073 5.02823 13.5802 5.18048 13.1235C5.30067 12.7669 5.46093 12.3021 5.65324 11.7693H1.41436C1.0698 11.7693 0.749281 11.585 0.577001 11.2845C0.404721 10.984 0.408728 10.6154 0.585014 10.3189L2.68843 6.77315C3.20927 5.89573 4.1508 5.35885 5.16846 5.35885H8.46581C8.56197 5.19859 8.65812 5.05035 8.75428 4.90612C12.0356 0.0662606 16.9235 -0.0939992 19.8403 0.442872C20.305 0.527009 20.6656 0.891601 20.7538 1.35636C21.2906 4.2771 21.1264 9.16103 16.2905 12.4424C16.1503 12.5385 15.998 12.6347 15.8378 12.7308V16.0282C15.8378 17.0458 15.3009 17.9914 14.4235 18.5082L10.8777 20.6116C10.5812 20.7879 10.2126 20.7919 9.91216 20.6196C9.61167 20.4474 9.42737 20.1308 9.42737 19.7823V15.4873C8.86245 15.6836 8.36965 15.8439 7.99705 15.9641C7.54832 16.1083 7.05953 15.9841 6.72298 15.6516H6.72699ZM15.8378 6.96146C16.2628 6.96146 16.6704 6.79261 16.971 6.49206C17.2715 6.19152 17.4404 5.78389 17.4404 5.35885C17.4404 4.93382 17.2715 4.52619 16.971 4.22564C16.6704 3.9251 16.2628 3.75625 15.8378 3.75625C15.4127 3.75625 15.0051 3.9251 14.7046 4.22564C14.404 4.52619 14.2352 4.93382 14.2352 5.35885C14.2352 5.78389 14.404 6.19152 14.7046 6.49206C15.0051 6.79261 15.4127 6.96146 15.8378 6.96146Z" fill="#0F0F23"/>
                </g>
                <defs>
                  <clipPath id="clip0_7_40">
                    <path d="M0.45282 0.23053H20.9661V20.7438H0.45282V0.23053Z" fill="white"/>
                  </clipPath>
                </defs>
              </svg>`
            }}
          />
          <span className="text-xl font-bold text-center bg-clip-text">
            START YOUR QUEST
          </span>
        </button>
      </div>
    </main>
  );
};
