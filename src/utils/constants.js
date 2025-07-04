export const QuestionType = {
  mcq: 1,
  fillinblank: 2,
  // opentext: 3,
  truefalse: 4,
};

export const DifficultyLevel = {
  easy: 1,
  medium: 2,
  hard: 3,
};

export const SourceType = {
  pdf: 1,
  youtube: 2,
  prompt: 3,
  context: 4,
};

export const LanguageType = {
  hindi: 1,
  english: 2,
  gujrati: 3,
};

export const STATIC_QUIZ_RES = {
  questions: [
    {
      question_text:
        "What principle states that exhaustive testing is not possible?",
      options: [
        "A. Risk Assessment Principle",
        "B. Pesticide Paradox Principle",
        "C. Early Testing Principle",
        "D. Context Dependent Principle",
      ],
      correct_answer: "B. Pesticide Paradox Principle",
      explanation:
        "The Pesticide Paradox Principle states that exhaustive testing is not possible and emphasizes the need for an optimal amount of testing based on risk assessment.",
      timestamp: "66.68",
    },
    {
      question_text:
        "According to the text, what may cause the operating system to fail when testing?",
      options: [
        "A. Opening multiple tabs in a browser",
        "B. Running memory-intensive applications simultaneously",
        "C. Playing music in the background",
        "D. Closing all active processes",
      ],
      correct_answer: "B. Running memory-intensive applications simultaneously",
      explanation:
        "Running memory-intensive applications simultaneously is likely to cause the operating system to fail, revealing the need to thoroughly test the multitasking module.",
      timestamp: "97.81",
    },
    {
      question_text:
        "Which principle emphasizes that finding and fixing defects does not guarantee usability?",
      options: [
        "A. Context Dependent Principle",
        "B. Absence of Error Principle",
        "C. Early Testing Principle",
        "D. Pesticide Paradox Principle",
      ],
      correct_answer: "B. Absence of Error Principle",
      explanation:
        "The Absence of Error Principle states that finding and fixing defects does not ensure that the system build is usable and fulfills the users' needs and requirements.",
      timestamp: "241.989",
    },
    {
      question_text:
        "What principle suggests that testing should start as early as possible in the software development lifecycle?",
      options: [
        "A. Risk Assessment Principle",
        "B. Absence of Error Principle",
        "C. Early Testing Principle",
        "D. Context Dependent Principle",
      ],
      correct_answer: "C. Early Testing Principle",
      explanation:
        "The Early Testing Principle advocates for testing to begin early in the software development lifecycle to capture defects in the requirements or design phase.",
      timestamp: "260.68",
    },
    {
      question_text:
        "Which principle states that testing is context dependent in software development?",
      options: [
        "A. Context Dependent Principle",
        "B. Risk Assessment Principle",
        "C. Pesticide Paradox Principle",
        "D. Early Testing Principle",
      ],
      correct_answer: "A. Context Dependent Principle",
      explanation:
        "The Context Dependent Principle highlights that testing approaches vary based on the software context, such as testing an e-Commerce site differently from a commercial off-the-shelf application.",
      timestamp: "281.2",
    },
  ],
  summary:
    "The text discusses various testing principles in software development, emphasizing the importance of risk assessment and early testing to optimize the testing process. It highlights that exhaustive testing is not feasible and that finding defects in the software during testing is crucial. The text also mentions the fallacy of assuming error-free software, stating that even if no defects are found, it does not guarantee the absence of errors.",
  flashcards: [
    {
      question:
        "What principle states that exhaustive testing is not possible?",
      answer: "Pesticide Paradox Principle",
    },
    {
      question: "What may cause the operating system to fail when testing?",
      answer: "Running memory-intensive applications simultaneously",
    },
    {
      question:
        "Which principle emphasizes that finding and fixing defects does not guarantee usability?",
      answer: "Absence of Error Principle",
    },
    {
      question:
        "What suggests that testing should start early in the software development lifecycle?",
      answer: "Early Testing Principle",
    },
    {
      question:
        "Which principle states that testing is context-dependent in software development?",
      answer: "Context Dependent Principle",
    },
  ],
};
