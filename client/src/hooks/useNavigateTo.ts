import { useNavigate } from "react-router-dom";

export default function useNavigateTo(path: string) {
  const navigate = useNavigate();

  if (!path || typeof path !== "string") {
    console.error("Invalid path provided to useNav.");
  }

  return () => navigate(path);
}
