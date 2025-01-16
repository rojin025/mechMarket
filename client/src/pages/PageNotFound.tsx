import { useGoBack } from "@/hooks/useGoBack";

function PageNotFound() {
  const goBack = useGoBack();

  return (
    <>
      <h1>The page you are looking for could not be found 😢</h1>
      <button onClick={goBack}>&larr; Go back</button>
    </>
  );
}

export default PageNotFound;
