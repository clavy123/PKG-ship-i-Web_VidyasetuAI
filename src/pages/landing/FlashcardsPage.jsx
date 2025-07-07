import { useLocation } from "react-router";
import FlashcardGameTailwind from "./FlashcardGameTailwind";

const FlashcardsPage = () => {
  const { state } = useLocation();
  return <FlashcardGameTailwind flashcards={state?.flashcards || []} />;
};

export default FlashcardsPage;
