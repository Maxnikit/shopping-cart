import { Select } from "@mantine/core";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { sortOptions } from "@utils/constants";

export function OrderSelect() {
  const navigate = useNavigate();
  const searchParams = useSearchParams()[0];
  const [value, setValue] = useState<string | null>(searchParams.get("order"));
  if (value === null) {
    setValue(sortOptions[0]);
  }
  function changeOrder(order: string | null) {
    if (order) {
      searchParams.set("order", order);
      setValue(order);
      navigate({ pathname: "/shop", search: searchParams.toString() });
    }
  }
  return (
    <Select
      data={sortOptions}
      defaultValue={sortOptions[0]}
      value={value}
      onChange={changeOrder}
      placeholder="Sort by"
    />
  );
}
