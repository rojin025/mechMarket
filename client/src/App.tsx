import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./App.css";
import ProductList from "./components/ProductList";
import AppLayout from "./components/ui/AppLayout";
import ProductDetail from "./components/ProductDetail";
import PageNotFound from "./pages/PageNotFound";
import CreateListingForm from "./features/listings/CreateListingForm";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="listings" />} />
            <Route path="listings" element={<ProductList />} />
            <Route path="/new-listing" element={<CreateListingForm />} />
            <Route path="listings/:id" element={<ProductDetail />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
