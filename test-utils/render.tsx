// ./test-utils/render.tsx
import { render as testingLibraryRender } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import { MemoryRouter } from "react-router-dom";
// Import your theme object
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "../src/theme";

// queryTesting guide that I used: https://tkdodo.eu/blog/testing-react-query
// https://medium.com/@jumana244/comprehensive-guide-to-testing-react-query-with-react-testing-library-c5700c934af6
const createTestQueryClient = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // turn off retries for testing
      },
    },
  });
  return queryClient;
};
export function render(ui: React.ReactNode) {
  const queryClient = createTestQueryClient();
  const wrapper = ({ children }) => (
    <>
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </QueryClientProvider>
      </MemoryRouter>
    </>
  );
  return { ...testingLibraryRender(ui, { wrapper }), queryClient };
  // return testingLibraryRender(<>{ui}</>, {
  //   wrapper: ({ children }: { children: React.ReactNode }) => (
  //     <QueryClientProvider client={queryClient}>
  //       <MemoryRouter>
  //         <MantineProvider theme={theme}>{children}</MantineProvider>
  //       </MemoryRouter>
  //     </QueryClientProvider>
  //   ),
  // });
}
