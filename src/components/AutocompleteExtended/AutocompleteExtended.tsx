import { AutocompleteProps, Autocomplete } from "@mantine/core";

interface AutocompleteExtendedProps extends AutocompleteProps {
  customOnNovelOptionSubmit?: (value: string) => void;
}

const AutocompleteExtended: React.FC<AutocompleteExtendedProps> = ({
  customOnNovelOptionSubmit,
  ...props
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // Directly assign the value without checking for length
      const newValue: string = event.currentTarget.value;
      checkOption(newValue); // This will now also work with empty strings

      // handle original onKeyDown event
      props.onKeyDown && props.onKeyDown(event);
      if (customOnNovelOptionSubmit) {
        customOnNovelOptionSubmit(newValue);
      }
    }
  };

  const checkOption = (newValue: string | null) => {
    if (newValue !== null && !props.data?.includes(newValue)) {
      customOnNovelOptionSubmit?.(newValue);
    }
  };

  return <Autocomplete {...props} onKeyDown={handleKeyDown} />;
};

export default AutocompleteExtended;
