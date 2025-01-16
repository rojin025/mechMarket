import { useNavigate } from "react-router-dom";

export default function useNav(path: string) {
  const navigate = useNavigate();

  //   const navigateTo = (path: unknown) => {
  //     if (!path || typeof path !== "string") {
  //       console.error("Invalid path provided to useNav.");
  //     }

  //     if (path && typeof path === "string") return () => navigate(path); // Navigate to the specified path
  //   };

  return () => navigate(path);
}
