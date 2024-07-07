import { AutocompleteProps, Autocomplete } from "@mantine/core";

interface AutocompleteExtendedProps extends AutocompleteProps {
  customOnNovelOptionSubmit?: (value: string) => void;
}

const AutocompleteExtended: React.FC<AutocompleteExtendedProps> = ({
  customOnNovelOptionSubmit,
  ...props
}) => {
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const newValue: string | null =
      event.target.value.length === 0 ? null : event.target.value;

    checkOption(newValue);

    // pass to original onBlur event
    props.onBlur && props.onBlur(event);
  };

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
      props.customOnNovelOptionSubmit?.(newValue);
    }
  };

  return (
    <Autocomplete {...props} onBlur={handleBlur} onKeyDown={handleKeyDown} />
  );
};

export default AutocompleteExtended;
