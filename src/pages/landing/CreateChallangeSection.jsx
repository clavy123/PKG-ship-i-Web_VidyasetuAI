import React, { useCallback, useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import { ICONS } from "../../assets/icons";
import {
  DifficultyLevel,
  LanguageType,
  SourceType,
} from "../../utils/constants";
import { FormSelect } from "../../components/FormSelect";
import { FormInput } from "../../components/FormInput";
import { FormTextarea } from "../../components/FormTextarea";
import { FileDropzone } from "../../components/FileDropzone";
import { useNavigate } from "react-router";
import {
  generateQuizFromVideo,
  generateQuizFromPrompt,
} from "../../store/slices/quiz.slice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import Modal from "../../components/Modal";

export const CreateChallengeSection = ({ isTitleDisplay = true }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quizModalOpen, setQuizModalOpen] = React.useState(false);
  const { error, loading } = useSelector((state) => state.quiz);
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
    clearErrors,
  } = useForm({
    defaultValues: {
      activeTab: "youtube",
      youtube: "",
      prompt: "",
      context: "",
      pdf: null,
      challengeMode: "multiple-choice",
      languageType: 2,
      difficulty: 2,
      numberOfQuestions: 5,
    },
  });

  const activeTab = watch("activeTab") || "youtube";

  // Helper: map tab to sourceTypeId
  const tabToSourceTypeId = {
    youtube: SourceType.youtube, // If you want YouTube to be 2, change this accordingly
    context: SourceType.context,
    prompt: SourceType.prompt,
    pdf: SourceType.pdf,
  };

  // Helper: map challengeMode to questionsTypeId
  const challengeModeToTypeId = {
    "multiple-choice": 1,
    "fill-in-the-blank": 2,
    "true-false": 4,
  };

  // Language options
  const languageTypeOptions = useMemo(
    () => [
      { value: LanguageType.english, label: "English" },
      { value: LanguageType.hindi, label: "Hindi" },
      { value: LanguageType.gujrati, label: "Gujarati" },
    ],
    []
  );

  // Difficulty Level options
  const difficultyOptions = useMemo(
    () => [
      { value: DifficultyLevel.easy, label: "Easy" },
      { value: DifficultyLevel.medium, label: "Medium" },
      { value: DifficultyLevel.hard, label: "Hard" },
    ],
    []
  );

  // Tabs
  const tabs = useMemo(
    () => [
      { id: "youtube", label: "YouTube Video", disabled: false },
      { id: "prompt", label: "Prompt", disabled: false },
      { id: "context", label: "Context", disabled: true },
      { id: "pdf", label: "Upload PDF", disabled: true },
    ],
    []
  );

  // Challenge Modes
  const challengeModes = useMemo(
    () => [
      {
        id: "multiple-choice",
        title: "Multiple Choice",
        description: "Classic MCQ format",
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
      },
      {
        id: "fill-in-the-blank",
        title: "Fill In The Blank",
        description: "One-liner responses",
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
      },
      {
        id: "true-false",
        title: "True False",
        description: "Best of both worlds",
        icon: `<svg width="60" height="32" viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 56px; height: 30px; position: absolute; left: 50%; top: 2px; transform: translateX(-50%)">
          <g>
            <circle cx="16" cy="16" r="15" stroke="#667eea" stroke-width="2" fill="#fff"/>
            <path d="M10 16.5L14 20.5L22 12.5" stroke="#39FF14" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <g>
            <circle cx="44" cy="16" r="15" stroke="#667eea" stroke-width="2" fill="#fff"/>
            <path d="M37 23L51 9" stroke="#FF073A" stroke-width="3" stroke-linecap="round"/>
            <path d="M37 9L51 23" stroke="#FF073A" stroke-width="3" stroke-linecap="round"/>
          </g>
        </svg>`,
      },
    ],
    []
  );

  // Helper for input rendering
  const renderTabInput = () => {
    if (activeTab === "pdf") {
      return (
        <Controller
          name="pdf"
          control={control}
          rules={{
            required: "File is required",
            validate: (file) => {
              if (!file) return "File is required";
              const allowed = file.type === "application/pdf";
              return allowed || "Only PDF is allowed";
            },
          }}
          render={({ field, fieldState }) => (
            <FileDropzone
              file={field.value}
              error={fieldState.error?.message}
              onDrop={(acceptedFiles) => {
                if (acceptedFiles && acceptedFiles.length > 0) {
                  clearErrors("pdf");
                  field.onChange(acceptedFiles[0]);
                }
              }}
            />
          )}
        />
      );
    }
    if (activeTab === "prompt") {
      return (
        <FormTextarea
          name="prompt"
          control={control}
          label="Prompt"
          placeholder="Enter your prompt..."
          minLength={15}
          maxLength={50}
          rules={{
            required: "Prompt is required",
            minLength: { value: 15, message: "Minimum 15 characters required" },
            maxLength: { value: 50, message: "Maximum 50 characters allowed" },
          }}
          rows={2}
        />
      );
    }
    if (activeTab === "context") {
      return (
        <FormTextarea
          name="context"
          control={control}
          label="Context"
          placeholder="Enter context..."
          maxLength={1000}
          rules={{
            required: "Context is required",
            maxLength: {
              value: 1000,
              message: "Maximum 1000 characters allowed",
            },
          }}
          rows={5}
        />
      );
    }
    return (
      <FormInput
        name="youtube"
        control={control}
        type="url"
        label="YouTube Video Link (Please select a video under 10 minutes)"
        placeholder="https://www.youtube.com/watch?v=..."
        rules={{ required: "YouTube link is required" }}
      />
    );
  };

  // Main submit handler
  const onSubmit = async (data) => {
    const deviceId = localStorage.getItem("deviceId");
    const questionsTypeId = challengeModeToTypeId[data.challengeMode];
    const difficultyTypeId = Number(data.difficulty);
    const languageId = Number(data.languageType);
    const numberOfQuestions = Number(data.numberOfQuestions) || 5;

    if (activeTab === "pdf") {
      // Use FormData for file upload
      const formData = new FormData();
      formData.append("numberOfQuestions", numberOfQuestions);
      formData.append("questionsTypeId", questionsTypeId);
      formData.append("difficultyTypeId", difficultyTypeId);
      formData.append("deviceId", deviceId);
      formData.append("languageId", languageId);
      formData.append("sourceTypeId", tabToSourceTypeId[activeTab]);
      formData.append("pdf", data.pdf);

      // fetch("/api/upload", { method: "POST", body: formData });
    } else {
      let payload = {
        numberOfQuestions,
        questionsTypeId,
        difficultyTypeId,
        deviceId,
        languageId,
        sourceTypeId: tabToSourceTypeId[activeTab],
      };

      if (activeTab === "youtube") {
        payload.videoUrl = data.youtube;
        const resultAction = await dispatch(generateQuizFromVideo(payload));

        console.log("resultAction-", resultAction);

        if (generateQuizFromVideo.rejected.match(resultAction)) {
          const errorMsg = resultAction.payload || "Quiz generation failed";

          if (
            errorMsg ===
            "Found existing questionnaire and regenerated successfully"
          ) {
            setQuizModalOpen(true);
          } else {
            toast.error(errorMsg);
          }
          return;
        }

        if (generateQuizFromVideo.fulfilled.match(resultAction)) {
          const { statusCode, message, data } = resultAction.payload;

          if (statusCode === 200) {
            if (data?.questionnaireResponseModel?.questions?.length) {
              toast.success("Quiz generated successfully!");
              navigate("/mcqs");
              localStorage.removeItem("quiz_selected_options");
              localStorage.removeItem("quizData");
            } else {
              toast.error("Irrelevant prompt");
            }
          } else {
            toast.error(message || "Quiz generation failed");
          }
        }
      } else if (activeTab === "context") {
        payload.context = data.context;
      } else if (activeTab === "prompt") {
        payload.prompt = data.prompt;
        const resultAction = await dispatch(generateQuizFromPrompt(payload));
        console.log("resultAction-", resultAction);
        if (generateQuizFromPrompt.rejected.match(resultAction)) {
          const errorMsg = resultAction.payload || "Quiz generation failed";

          if (
            errorMsg ===
            "Found existing questionnaire and regenerated successfully"
          ) {
            setQuizModalOpen(true);
          } else {
            toast.error(errorMsg);
          }
          return;
        }
        if (generateQuizFromPrompt.fulfilled.match(resultAction)) {
          const { statusCode, message, data } = resultAction.payload;

          if (statusCode === 200) {
            if (data?.questionnaireResponseModel?.questions?.length) {
              toast.success("Quiz generated successfully!");
              navigate("/mcqs");
              localStorage.removeItem("quiz_selected_options");
              localStorage.removeItem("quizData");
            } else {
              toast.error("Irrelevant prompt");
            }
          } else {
            toast.error(message || "Quiz generation failed");
          }
        }
      }
    }
  };

  const closeQuizModal = useCallback(() => {
    setQuizModalOpen(false);
  }, []);

  const generateNewQuiz = useCallback(() => {
    closeQuizModal();
    toast.success("Quiz generated successfully!");
    navigate("/mcqs");
    localStorage.removeItem("quiz_selected_options");
    localStorage.removeItem("quizData");
  }, [closeQuizModal, navigate]);

  if (!isTitleDisplay) {
    return (
      <div className="w-full flex justify-center">
        <form
          className="bg-gray-900 rounded-2xl shadow-lg border border-gray-700 px-0 py-0 w-fit flex flex-col items-center max-md:min-w-0 max-md:w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Tabs */}
          <div className="w-full flex justify-center pt-6">
            <div className="bg-gray-800 rounded-xl shadow border border-gray-700 px-4 py-3 w-fit flex">
              <div className="flex gap-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-[#ff073a] to-[#667eea] text-white"
                        : "bg-gray-900 text-gray-300"
                    }`}
                    onClick={() => {
                      if(tab.disabled) return;
                      setValue("activeTab", tab.id);
                      setValue("pdf", "");
                      setValue("youtube", "");
                      setValue("prompt", "");
                      setValue("context", "");
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Inputs and Challenge Mode */}
          <div className="flex flex-col gap-8 justify-center items-start border-0 border-solid bg-black bg-opacity-0 w-full px-8 py-8 max-md:px-4 max-md:py-6">
            {/* Tab Content */}
            {renderTabInput()}

            {/* Number of Questions */}
            <FormInput
              name="numberOfQuestions"
              control={control}
              type="number"
              label="Number of Questions"
              placeholder="Enter number of questions"
              rules={{
                required: "Number of questions is required",
                min: { value: 1, message: "At least 1 question required" },
                max: { value: 10, message: "Maximum 10 questions allowed" },
              }}
            />

            {/* Challenge Mode Section */}
            <Controller
              name="challengeMode"
              control={control}
              rules={{ required: "Challenge mode is required" }}
              render={({ field }) => (
                <div className="flex flex-col gap-4 justify-center items-start border-0 border-solid bg-black bg-opacity-0 w-full">
                  <label className="flex gap-2 items-center border-0 border-solid bg-black bg-opacity-0">
                    <span
                      className={`text-lg font-bold text-lime-500 transition-all duration-200`}
                      id="challenge-mode-label-text"
                    >
                      Choose Your Challenge Mode
                    </span>
                  </label>
                  <div className="flex gap-4 justify-center items-start border-0 border-solid bg-black bg-opacity-0 w-full max-md:flex-col max-md:gap-3">
                    {challengeModes.map((mode) => {
                      const isSelected = field.value === mode.id;
                      return (
                        <div
                          className={`flex justify-center items-center p-5 bg-gray-900 rounded-lg border-2 transition-all duration-200 ${
                            isSelected
                              ? "border-indigo-500 scale-105 shadow-lg"
                              : "border-gray-600 hover:border-lime-400 hover:scale-105 hover:shadow-xl"
                          } border-solid cursor-pointer h-[124px] w-[267px] max-md:w-full group/challenge-card`}
                          onClick={() => field.onChange(mode.id)}
                          key={mode.id}
                        >
                          <div className="relative border-0 border-solid bg-black bg-opacity-0 h-[88px] w-[231px]">
                            <div
                              dangerouslySetInnerHTML={{ __html: mode.icon }}
                            />
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
                  {field.value === "" && (
                    <span className="text-xs text-red-400 mt-1">
                      {errors.challengeMode?.message}
                    </span>
                  )}
                </div>
              )}
            />

            {/* Select Language & Difficulty Level */}
            <div className="flex gap-4 justify-center items-start border-0 border-solid bg-black bg-opacity-0 w-full">
              <FormSelect
                name="languageType"
                control={control}
                label="Select Language"
                options={languageTypeOptions}
                rules={{ required: "Language is required" }}
                disabled
              />
              <FormSelect
                name="difficulty"
                control={control}
                label="Select Difficulty Level"
                options={difficultyOptions}
                rules={{ required: "Difficulty level is required" }}
              />
            </div>

            {/* Generate Quiz Button */}
            <div className="flex justify-center items-center border-0 border-solid bg-black bg-opacity-0 w-full">
              <button
                type="submit"
                className="flex gap-3 items-center pt-3.5 pr-20 pb-5 pl-16 rounded-full border-0 border-solid shadow-sm cursor-pointer w-[329px] max-sm:w-full max-sm:max-w-[280px] bg-white text-black"
              >
                <span className="text-xl font-bold text-center bg-clip-text">
                  GENERATE QUIZ
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <section className="flex justify-center items-center px-72 py-20 w-full border-0 border-solid bg-black bg-opacity-0 max-md:px-10 max-md:py-20 max-sm:px-5 max-sm:py-16">
      <div className="flex flex-col gap-12 justify-center items-start border-0 border-solid bg-black bg-opacity-0 w-[896px] max-md:w-full max-md:max-w-[800px] max-sm:gap-8">
        <div className="border-0 border-solid bg-black bg-opacity-0 w-[896px] max-md:w-full flex flex-col items-center">
          <h2
            className="mx-auto my-0 -mt-2 text-5xl md:text-4xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] via-[#667eea] to-[#ff073a] text-center drop-shadow-lg tracking-tight w-full"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            CREATE YOUR CHALLENGE
          </h2>
          <p className="mx-auto my-0 mt-8 text-2xl md:text-xl sm:text-lg font-semibold text-center text-white/90 w-[686px] max-md:w-full max-sm:mt-5 max-sm:text-base max-sm:leading-6 drop-shadow">
            Drop a <span className="text-lime-400 font-bold">YouTube link</span>{" "}
            and let <span className="text-indigo-400 font-bold">AI</span> craft
            your personalized quiz adventure!
          </p>
        </div>

        <div className="w-full flex justify-center bg-gradient-to-r from-[#1a1a2e] to-[#16213e]">
          <form
            className="bg-gray-900 rounded-2xl shadow-lg border border-gray-700 px-0 py-0 w-fit flex flex-col items-center max-md:min-w-0 max-md:w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Tabs */}
            <div className="w-full flex justify-center pt-6">
              <div className="bg-gray-800 rounded-xl shadow border border-gray-700 px-4 py-3 w-fit flex">
                <div className="flex gap-4">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      className={`px-6 py-2 rounded-full font-semibold transition-colors ${tab.disabled && 'cursor-not-allowed'} ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-[#ff073a] to-[#667eea] text-white"
                          : "bg-gray-900 text-gray-300"
                      }`}
                      onClick={() => {
                        if(tab.disabled) return;
                        setValue("activeTab", tab.id);
                        setValue("pdf", "");
                        setValue("youtube", "");
                        setValue("prompt", "");
                        setValue("context", "");
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Inputs and Challenge Mode */}
            <div className="flex flex-col gap-8 justify-center items-start border-0 border-solid bg-black bg-opacity-0 w-full px-8 py-8 max-md:px-4 max-md:py-6">
              {/* Tab Content */}
              {renderTabInput()}

              {/* Number of Questions */}
              <FormInput
                name="numberOfQuestions"
                control={control}
                type="number"
                label="Number of Questions"
                placeholder="Enter number of questions"
                rules={{
                  required: "Number of questions is required",
                  min: { value: 1, message: "At least 1 question required" },
                  max: { value: 10, message: "Maximum 10 questions allowed" },
                }}
              />

              {/* Challenge Mode Section */}
              <Controller
                name="challengeMode"
                control={control}
                rules={{ required: "Challenge mode is required" }}
                render={({ field }) => (
                  <div className="flex flex-col gap-4 justify-center items-start border-0 border-solid bg-black bg-opacity-0 w-full">
                    {/* Challenge Mode Label with hover effect */}
                    <label
                      className={`flex gap-2 items-center border-0 border-solid bg-black bg-opacity-0 transition-all duration-200 ${
                        field.value && field.value !== "" ? "" : ""
                      }`}
                      id="challenge-mode-label"
                    >
                      <span
                        className="text-lg font-bold text-lime-500 transition-all duration-200"
                        id="challenge-mode-label-text"
                      >
                        Choose Your Challenge Mode
                      </span>
                    </label>
                    <div className="flex gap-4 justify-center items-start border-0 border-solid bg-black bg-opacity-0 w-full max-md:flex-col max-md:gap-3 group/challenge-modes">
                      {challengeModes.map((mode) => {
                        const isSelected = field.value === mode.id;
                        return (
                          <div
                            className={`flex justify-center items-center p-5 bg-gray-900 rounded-lg border-2 transition-all duration-200 ${
                              isSelected
                                ? "border-indigo-500 scale-105 shadow-lg"
                                : "border-gray-600 hover:border-lime-400 hover:scale-105 hover:shadow-xl"
                            } border-solid cursor-pointer h-[124px] w-[267px] max-md:w-full group/challenge-card`}
                            onClick={() => field.onChange(mode.id)}
                            key={mode.id}
                            onMouseEnter={() => {
                              const label = document.getElementById(
                                "challenge-mode-label-text"
                              );
                              if (label) {
                                label.classList.add(
                                  "text-lime-300",
                                  "drop-shadow-glow",
                                  "scale-105"
                                );
                              }
                            }}
                            onMouseLeave={() => {
                              const label = document.getElementById(
                                "challenge-mode-label-text"
                              );
                              if (label) {
                                label.classList.remove(
                                  "text-lime-300",
                                  "drop-shadow-glow",
                                  "scale-105"
                                );
                              }
                            }}
                          >
                            <div className="relative border-0 border-solid bg-black bg-opacity-0 h-[88px] w-[231px]">
                              <div
                                dangerouslySetInnerHTML={{ __html: mode.icon }}
                              />
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
                    {field.value === "" && (
                      <span className="text-xs text-red-400 mt-1">
                        {errors.challengeMode?.message}
                      </span>
                    )}
                  </div>
                )}
              />

              {/* Select Language & Difficulty Level */}
              <div className="flex gap-4 justify-center items-start border-0 border-solid bg-black bg-opacity-0 w-full">
                <FormSelect
                  name="languageType"
                  control={control}
                  label="Select Language"
                  options={languageTypeOptions}
                  rules={{ required: "Language is required" }}
                  disabled
                />
                <FormSelect
                  name="difficulty"
                  control={control}
                  label="Select Difficulty Level"
                  options={difficultyOptions}
                  rules={{ required: "Difficulty level is required" }}
                />
              </div>

              {/* Generate Quiz Button */}
              <div className="flex justify-center items-center border-0 border-solid bg-black bg-opacity-0 w-full">
                <button
                  className="flex items-center justify-center gap-3 px-10 py-4 rounded-full text-white text-xl font-extrabold tracking-wide shadow-lg transition-all duration-200 bg-gradient-to-r from-[#39FF14] via-[#667eea] to-[#ff073a] hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-400 w-[329px] max-sm:w-full max-sm:max-w-[280px]"
                  type="submit"
                >
                  <ICONS.IconCheckCircle
                    className="text-black"
                    style={{ minWidth: 24, minHeight: 24 }}
                    size={24}
                  />
                  <span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-[#0A0A23] via-[#0A0A23] to-[#ff073a] font-extrabold text-xl tracking-wide"
                    style={{
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    GENERATE QUIZ
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Modal open={quizModalOpen} onClose={closeQuizModal}>
        <div className="bg-gray-900 rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-md mx-auto">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 text-center">
            Are you sure you want to generate the same quiz again?
          </h3>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={closeQuizModal}
              className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-medium transition"
            >
              No
            </button>
            <button
              onClick={generateNewQuiz} // Define this function to trigger the action
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#39FF14] via-[#667eea] to-[#ff073a] hover:opacity-90 text-white font-semibold transition"
            >
              Yes
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};
