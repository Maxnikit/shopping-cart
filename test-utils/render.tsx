// ./test-utils/render.tsx
import { render as testingLibraryRender } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import { MemoryRouter } from "react-router-dom";
// Import your theme object
import { theme } from "../src/theme";

export function render(ui: React.ReactNode, initialEntries = ["/"]) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MemoryRouter initialEntries={initialEntries}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </MemoryRouter>
    ),
  });
}
