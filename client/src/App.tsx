import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProductList />
      </QueryClientProvider>
    </>
  );
}

export default App;
