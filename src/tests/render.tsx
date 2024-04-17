// ./test-utils/render.tsx
import { render as testingLibraryRender } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
// Import your theme object
// import { theme } from "../src/theme";

export function render(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider>{children}</MantineProvider>
    ),
  });
}
