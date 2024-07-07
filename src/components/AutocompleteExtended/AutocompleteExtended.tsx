import { AutocompleteProps, Autocomplete } from "@mantine/core";

interface AutocompleteExtendedProps extends AutocompleteProps {
  onNovelOptionSubmit?: (value: string) => void;
}

const AutocompleteExtended: React.FC<AutocompleteExtendedProps> = ({
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
      const newValue: string | null =
        event.currentTarget.value.length === 0
          ? null
          : event.currentTarget.value;
      checkOption(newValue);
    }

    // handle original onKeyDown event
    props.onKeyDown && props.onKeyDown(event);
  };

  const checkOption = (newValue: string | null) => {
    if (newValue !== null && !props.data?.includes(newValue)) {
      props.onNovelOptionSubmit?.(newValue);
    }
  };

  return (
    <Autocomplete {...props} onBlur={handleBlur} onKeyDown={handleKeyDown} />
  );
};

export default AutocompleteExtended;
