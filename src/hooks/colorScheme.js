import { useComputedColorScheme, useMantineColorScheme } from "@mantine/core";

// -> colorScheme is 'auto' | 'light' | 'dark'
const { colorScheme, setColorScheme } = useMantineColorScheme();

// -> computedColorScheme is 'light' | 'dark', argument is the default value
const computedColorScheme = useComputedColorScheme("light");

// Correct color scheme toggle implementation
// computedColorScheme is always either 'light' or 'dark'
const toggleColorScheme = () => {
  setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
};

export { colorScheme, computedColorScheme, toggleColorScheme };
