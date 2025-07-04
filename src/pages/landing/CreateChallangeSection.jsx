import React, { useState } from "react";

export const CreateChallengeSection = () => {
  const [selectedMode, setSelectedMode] = useState("multiple-choice");

  const challengeModes = [
    {
      id: "multiple-choice",
      icon: `<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 30px; height: 30px; position: absolute; left: 50%; top: 2px; transform: translateX(-50%)">
        <g clip-path="url(#clip0_7_165)">
          <path d="M15.3281 30.75C19.3064 30.75 23.1217 29.1696 25.9347 26.3566C28.7478 23.5436 30.3281 19.7282 30.3281 15.75C30.3281 11.7718 28.7478 7.95644 25.9347 5.1434C23.1217 2.33035 19.3064 0.75 15.3281 0.75C11.3499 0.75 7.53457 2.33035 4.72152 5.1434C1.90848 7.95644 0.328125 11.7718 0.328125 15.75C0.328125 19.7282 1.90848 23.5436 4.72152 26.3566C7.53457 29.1696 11.3499 30.75 15.3281 30.75ZM21.9492 12.9961L14.4492 20.4961C13.8984 21.0469 13.0078 21.0469 12.4629 20.4961L8.71289 16.7461C8.16211 16.1953 8.16211 15.3047 8.71289 14.7598C9.26367 14.2148 10.1543 14.209 10.6992 14.7598L13.4531 17.5137L19.957 11.0039C20.5078 10.4531 21.3984 10.4531 21.9434 11.0039C22.4883 11.5547 22.4941 12.4453 21.9434 12.9902L21.9492 12.9961Z" fill="#667EEA"/>
        </g>
        <defs>
          <clipPath id="clip0_7_165">
            <path d="M0.328125 0.75H30.3281V30.75H0.328125V0.75Z" fill="white"/>
          </clipPath>
        </defs>
      </svg>`,
      title: "Multiple Choice",
      description: "Classic MCQ format",
    },
    {
      id: "short-answer",
      icon: `<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 30px; height: 30px; position: absolute; left: 50%; top: 2px; transform: translateX(-50%)">
        <g clip-path="url(#clip0_7_172)">
          <path d="M28.6172 2.02148C27.334 0.738281 25.2598 0.738281 23.9766 2.02148L22.2129 3.7793L27.9492 9.51563L29.7129 7.75195C30.9961 6.46875 30.9961 4.39453 29.7129 3.11133L28.6172 2.02148ZM11.0859 14.9121C10.7285 15.2695 10.4531 15.709 10.2949 16.1953L8.56055 21.3984C8.39062 21.9023 8.52539 22.459 8.90039 22.8398C9.27539 23.2207 9.83203 23.3496 10.3418 23.1797L15.5449 21.4453C16.0254 21.2871 16.4648 21.0117 16.8281 20.6543L26.6309 10.8457L20.8887 5.10352L11.0859 14.9121ZM6.60938 4.5C3.50391 4.5 0.984375 7.01953 0.984375 10.125V25.125C0.984375 28.2305 3.50391 30.75 6.60938 30.75H21.6094C24.7148 30.75 27.2344 28.2305 27.2344 25.125V19.5C27.2344 18.4629 26.3965 17.625 25.3594 17.625C24.3223 17.625 23.4844 18.4629 23.4844 19.5V25.125C23.4844 26.1621 22.6465 27 21.6094 27H6.60938C5.57227 27 4.73438 26.1621 4.73438 25.125V10.125C4.73438 9.08789 5.57227 8.25 6.60938 8.25H12.2344C13.2715 8.25 14.1094 7.41211 14.1094 6.375C14.1094 5.33789 13.2715 4.5 12.2344 4.5H6.60938Z" fill="#39FF14"/>
        </g>
        <defs>
          <clipPath id="clip0_7_172">
            <path d="M0.984375 0.75H30.9844V30.75H0.984375V0.75Z" fill="white"/>
          </clipPath>
        </defs>
      </svg>`,
      title: "Short Answer",
      description: "One-liner responses",
    },
    {
      id: "mixed-mode",
      icon: `<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 30px; height: 30px; position: absolute; left: 50%; top: 2px; transform: translateX(-50%)">
        <g clip-path="url(#clip0_7_179)">
          <path d="M24.3164 2.76559C25.0195 2.47262 25.8223 2.63668 26.3613 3.16989L30.1113 6.91989C30.4629 7.27145 30.6621 7.74606 30.6621 8.24411C30.6621 8.74215 30.4629 9.21676 30.1113 9.56833L26.3613 13.3183C25.8223 13.8574 25.0195 14.0156 24.3164 13.7226C23.6133 13.4297 23.1562 12.75 23.1562 11.9882V10.125H21.2812C20.6895 10.125 20.1328 10.4004 19.7812 10.875L17.2969 14.1855L14.9531 11.0625L16.7812 8.62497C17.8418 7.207 19.5117 6.37497 21.2812 6.37497H23.1562V4.49997C23.1562 3.74411 23.6133 3.05856 24.3164 2.76559ZM10.2656 17.3144L12.6094 20.4375L10.7812 22.875C9.7207 24.2929 8.05078 25.125 6.28125 25.125H2.53125C1.49414 25.125 0.65625 24.2871 0.65625 23.25C0.65625 22.2129 1.49414 21.375 2.53125 21.375H6.28125C6.87305 21.375 7.42969 21.0996 7.78125 20.625L10.2656 17.3144ZM26.3555 28.33C25.8164 28.8691 25.0137 29.0273 24.3105 28.7343C23.6074 28.4414 23.1504 27.7617 23.1504 27V25.125H21.2812C19.5117 25.125 17.8418 24.2929 16.7812 22.875L7.78125 10.875C7.42969 10.4004 6.87305 10.125 6.28125 10.125H2.53125C1.49414 10.125 0.65625 9.28708 0.65625 8.24997C0.65625 7.21286 1.49414 6.37497 2.53125 6.37497H6.28125C8.05078 6.37497 9.7207 7.207 10.7812 8.62497L19.7812 20.625C20.1328 21.0996 20.6895 21.375 21.2812 21.375H23.1562V19.5C23.1562 18.7441 23.6133 18.0586 24.3164 17.7656C25.0195 17.4726 25.8223 17.6367 26.3613 18.1699L30.1113 21.9199C30.4629 22.2715 30.6621 22.7461 30.6621 23.2441C30.6621 23.7422 30.4629 24.2168 30.1113 24.5683L26.3613 28.3183L26.3555 28.33Z" fill="#FF073A"/>
        </g>
        <defs>
          <clipPath id="clip0_7_179">
            <path d="M0.65625 0.75H30.6562V30.75H0.65625V0.75Z" fill="white"/>
          </clipPath>
        </defs>
      </svg>`,
      title: "Mixed Mode",
      description: "Best of both worlds",
    },
  ];

  return (
    <section className="flex justify-center items-center px-72 py-20 w-full border-0 border border-solid bg-black bg-opacity-0 h-[772px] max-md:px-10 max-md:py-20 max-sm:px-5 max-sm:py-16 max-sm:h-auto">
      <div className="flex flex-col gap-12 justify-center items-start border-0 border border-solid bg-black bg-opacity-0 h-[612px] w-[896px] max-md:w-full max-md:max-w-[800px] max-sm:gap-8 max-sm:h-auto">
        <div className="border-0 border border-solid bg-black bg-opacity-0 h-[84px] w-[896px] max-md:w-full max-sm:h-auto">
          <h2 className="mx-auto my-0 -mt-2 text-4xl leading-10 text-center bg-clip-text h-[45px] w-[572px] max-md:w-full max-md:text-3xl max-sm:text-2xl max-sm:leading-7 text-white">
            CREATE YOUR CHALLENGE
          </h2>
          <p className="mx-auto my-0 mt-14 h-7 text-xl leading-7 text-center text-gray-300 w-[686px] max-md:w-full max-md:text-lg max-sm:mt-5 max-sm:text-base max-sm:leading-6">
            Drop a YouTube link and let AI craft your personalized quiz
            adventure
          </p>
        </div>
        <div className="flex justify-center items-center p-8 rounded-2xl border-0 border border-solid shadow-sm h-[480px] w-[896px] max-md:w-full max-sm:p-6 max-sm:h-auto bg-gray-900">
          <div className="flex flex-col gap-8 justify-center items-start border-0 border border-solid bg-black bg-opacity-0 h-[416px] w-[832px] max-md:w-full max-sm:gap-6 max-sm:h-auto">
            <div className="flex flex-col gap-3 justify-center items-start border-0 border border-solid bg-black bg-opacity-0 w-[832px] max-md:w-full max-sm:h-auto">
              <label className="flex gap-2 items-center h-7 border-0 border border-solid bg-black bg-opacity-0">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 20.25px; height: 18px">
                      <path d="M20.25 18.25H0V0.25H20.25V18.25Z" stroke="#E5E7EB"/>
                      <path d="M19.3238 4.61229C19.103 3.78085 18.4524 3.12603 17.6263 2.9038C16.129 2.5 10.125 2.5 10.125 2.5C10.125 2.5 4.12102 2.5 2.62368 2.9038C1.79761 3.12606 1.14701 3.78085 0.926197 4.61229C0.524994 6.11934 0.524994 9.26364 0.524994 9.26364C0.524994 9.26364 0.524994 12.4079 0.926197 13.915C1.14701 14.7464 1.79761 15.374 2.62368 15.5962C4.12102 16 10.125 16 10.125 16C10.125 16 16.129 16 17.6263 15.5962C18.4524 15.374 19.103 14.7464 19.3238 13.915C19.725 12.4079 19.725 9.26364 19.725 9.26364C19.725 9.26364 19.725 6.11934 19.3238 4.61229ZM8.16135 12.1184V6.40885L13.1795 9.26371L8.16135 12.1184Z" fill="#39FF14"/>
                    </svg>`,
                  }}
                />
                <span className="text-lg font-bold text-lime-500">
                  YouTube Video Link
                </span>
              </label>
              <div className="relative border-0 border border-solid bg-black bg-opacity-0 h-[60px] w-[832px] max-md:w-full">
                <input
                  type="url"
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="inline-flex items-center py-0 pl-4 bg-gray-900 rounded-lg border-2 border-indigo-500 border-solid h-[60px] pr-[511px] w-[832px] max-md:py-0 max-md:pr-16 max-md:pl-4 max-md:w-full text-base leading-6 text-gray-400"
                />
                <div
                  className="absolute right-5 top-1/2 transform -translate-y-1/2"
                  dangerouslySetInnerHTML={{
                    __html: `<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 16px">
                      <g clip-path="url(#clip0_7_144)">
                        <path d="M18.1187 8.36559C19.8843 6.59997 19.8843 3.74059 18.1187 1.97497C16.5562 0.412466 14.0937 0.209341 12.2969 1.49372L12.2469 1.52809C11.7969 1.84997 11.6937 2.47497 12.0156 2.92184C12.3375 3.36872 12.9625 3.47497 13.4094 3.15309L13.4594 3.11872C14.4625 2.40309 15.8344 2.51559 16.7031 3.38747C17.6875 4.37184 17.6875 5.96559 16.7031 6.94997L13.1968 10.4625C12.2125 11.4468 10.6187 11.4468 9.63435 10.4625C8.76248 9.59059 8.64998 8.21872 9.3656 7.21872L9.39997 7.16872C9.72185 6.71872 9.6156 6.09372 9.16873 5.77497C8.72185 5.45622 8.09373 5.55934 7.77498 6.00622L7.7406 6.05622C6.4531 7.84997 6.65623 10.3125 8.21873 11.875C9.98435 13.6406 12.8437 13.6406 14.6094 11.875L18.1187 8.36559ZM1.88123 7.63434C0.115601 9.39997 0.115601 12.2593 1.88123 14.025C3.44373 15.5875 5.90623 15.7906 7.7031 14.5062L7.7531 14.4718C8.2031 14.15 8.30623 13.525 7.98435 13.0781C7.66248 12.6312 7.03748 12.525 6.5906 12.8468L6.5406 12.8812C5.53748 13.5968 4.1656 13.4843 3.29685 12.6125C2.31248 11.625 2.31248 10.0312 3.29685 9.04684L6.8031 5.53747C7.78748 4.55309 9.38123 4.55309 10.3656 5.53747C11.2375 6.40934 11.35 7.78122 10.6343 8.78434L10.6 8.83434C10.2781 9.28434 10.3844 9.90934 10.8312 10.2281C11.2781 10.5468 11.9062 10.4437 12.225 9.99684L12.2593 9.94684C13.5469 8.14997 13.3437 5.68747 11.7812 4.12497C10.0156 2.35934 7.15623 2.35934 5.3906 4.12497L1.88123 7.63434Z" fill="#667EEA"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_7_144">
                          <path d="M0 0H20V16H0V0Z" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>`,
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center items-start border-0 border border-solid bg-black bg-opacity-0 h-[168px] w-[832px] max-md:w-full max-sm:h-auto">
              <label className="flex gap-2 items-center h-7 border-0 border border-solid bg-black bg-opacity-0">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 22.5px; height: 18px">
                      <g clip-path="url(#clip0_7_147)">
                        <path d="M6.75 2.5C3.02344 2.5 0 5.52344 0 9.25C0 12.9766 3.02344 16 6.75 16H15.75C19.4766 16 22.5 12.9766 22.5 9.25C22.5 5.52344 19.4766 2.5 15.75 2.5H6.75ZM17.4375 6.15625C17.8105 6.15625 18.1681 6.30441 18.4319 6.56813C18.6956 6.83185 18.8438 7.18954 18.8438 7.5625C18.8438 7.93546 18.6956 8.29315 18.4319 8.55687C18.1681 8.82059 17.8105 8.96875 17.4375 8.96875C17.0645 8.96875 16.7069 8.82059 16.4431 8.55687C16.1794 8.29315 16.0312 7.93546 16.0312 7.5625C16.0312 7.18954 16.1794 6.83185 16.4431 6.56813C16.7069 6.30441 17.0645 6.15625 17.4375 6.15625ZM13.7812 10.9375C13.7812 10.5645 13.9294 10.2069 14.1931 9.94313C14.4569 9.67941 14.8145 9.53125 15.1875 9.53125C15.5605 9.53125 15.9181 9.67941 16.1819 9.94313C16.4456 10.2069 16.5938 10.5645 16.5938 10.9375C16.5938 11.3105 16.4456 11.6681 16.1819 11.9319C15.9181 12.1956 15.5605 12.3438 15.1875 12.3438C14.8145 12.3438 14.4569 12.1956 14.1931 11.9319C13.9294 11.6681 13.7812 11.3105 13.7812 10.9375ZM5.90625 7.28125C5.90625 6.81367 6.28242 6.4375 6.75 6.4375C7.21758 6.4375 7.59375 6.81367 7.59375 7.28125V8.40625H8.71875C9.18633 8.40625 9.5625 8.78242 9.5625 9.25C9.5625 9.71758 9.18633 10.0938 8.71875 10.0938H7.59375V11.2188C7.59375 11.6863 7.21758 12.0625 6.75 12.0625C6.28242 12.0625 5.90625 11.6863 5.90625 11.2188V10.0938H4.78125C4.31367 10.0938 3.9375 9.71758 3.9375 9.25C3.9375 8.78242 4.31367 8.40625 4.78125 8.40625H5.90625V7.28125Z" fill="#39FF14"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_7_147">
                          <path d="M0 0.25H22.5V18.25H0V0.25Z" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>`,
                  }}
                />
                <span className="text-lg font-bold text-lime-500">
                  Choose Your Challenge Mode
                </span>
              </label>
              <div className="flex gap-4 justify-center items-start border-0 border border-solid bg-black bg-opacity-0 h-[124px] w-[832px] max-md:flex-col max-md:gap-3 max-md:w-full max-md:h-auto max-sm:h-auto">
                {challengeModes.map((mode) => {
                  const isSelected = selectedMode === mode.id;
                  return (
                    <div
                      className={`flex justify-center items-center p-5 bg-gray-900 rounded-lg border-2 ${
                        isSelected ? "border-indigo-500" : "border-gray-600"
                      } border-solid cursor-pointer h-[124px] w-[267px] max-md:w-full`}
                      onClick={() => setSelectedMode(mode.id)}
                      key={mode.id}
                    >
                      <div className="relative border-0 border border-solid bg-black bg-opacity-0 h-[88px] w-[231px]">
                        <div dangerouslySetInnerHTML={{ __html: mode.icon }} />
                        <h4 className="absolute left-2/4 text-base font-bold leading-6 text-center text-white whitespace-nowrap -translate-x-2/4 top-[33px]">
                          {mode.title}
                        </h4>
                        <p className="absolute left-2/4 text-sm leading-5 text-center text-gray-400 whitespace-nowrap -translate-x-2/4 top-[66px]">
                          {mode.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center items-center border-0 border border-solid bg-black bg-opacity-0 h-[84px] w-[832px] max-md:w-full max-sm:h-auto">
              <button className="flex gap-3 items-center pt-3.5 pr-20 pb-5 pl-16 rounded-full border-0 border border-solid shadow-sm cursor-pointer h-[63px] w-[329px] max-sm:w-full max-sm:max-w-[280px] bg-white text-black">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 20.941px; height: 20.941px">
                      <g clip-path="url(#clip0_7_155)">
                        <path d="M1.05525 18.9551C0.290421 18.1902 0.290421 16.9469 1.05525 16.1779L16.6504 0.582778C17.4152 -0.182052 18.6586 -0.182052 19.4275 0.582778L20.8427 1.99792C21.6075 2.76275 21.6075 4.00611 20.8427 4.77503L5.24341 20.3702C4.47858 21.135 3.23522 21.135 2.4663 20.3702L1.05525 18.9551ZM14.6954 7.67893L18.9899 3.38443L18.041 2.43146L13.7465 6.72596L14.6995 7.67893H14.6954Z" fill="#0F0F23"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_7_155">
                          <path d="M0.478577 0.00610352H21.4194V20.9469H0.478577V0.00610352Z" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>`,
                  }}
                />
                <span className="text-xl font-bold text-center bg-clip-text">
                  GENERATE QUIZ
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
