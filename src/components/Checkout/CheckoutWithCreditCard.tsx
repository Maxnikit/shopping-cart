import {
  Button,
  Group,
  Stack,
  Text,
  Title,
  Card,
  Radio,
  Fieldset,
  TextInput,
  NumberInput,
} from "@mantine/core";
import { useCartStore } from "../../stores/cartStore";

const Checkout = () => {
  const { getTotalItemPrice } = useCartStore();

  return (
    <Card withBorder maw={500} m="auto">
      <Title>Checkout</Title>
      <Text>Total: ${getTotalItemPrice().toFixed(2)} </Text>
      {/* TODO some phone number, email, adress, credit card? */}
      <Radio.Group name="paymentMethod" label="Select payment method">
        <Stack mt="xs">
          <Radio value="creditCard" label="Credit Card"></Radio>
          <Radio value="cash" label="Cash"></Radio>
        </Stack>
      </Radio.Group>
      <Fieldset legend="Credit card information" variant="unstyled">
        <Stack>
          <TextInput placeholder="Name on card" />
          <NumberInput type="tel" hideControls placeholder="Card number" />
          <Group>
            <NumberInput w="40%" placeholder="mm/yy" type="tel" />
            <NumberInput w="20%" placeholder="CVV" type="tel" />
          </Group>
        </Stack>
      </Fieldset>

      <Button>Confirm order</Button>
    </Card>
  );
};
export default Checkout;
