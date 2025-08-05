import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FC, ReactNode } from "react";

interface ICildren {
  children: ReactNode;
}

const ReactQueryProduct: FC<ICildren> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}> {children}</QueryClientProvider>
  );
};

export default ReactQueryProduct;
