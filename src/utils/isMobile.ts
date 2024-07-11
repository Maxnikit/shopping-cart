import { em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export function isMobile() {
  return useMediaQuery(`(max-width: ${em(768)})`);
}
