import { Select } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { sortOptions } from "@utils/constants";

export function OrderSelect() {
  const navigate = useNavigate();
  const searchParams = useSearchParams()[0];
  const [value, setValue] = useState<string | null>(searchParams.get("order"));
  console.log(value);
  if (value === null) {
    setValue(sortOptions[0]);
  }

  useEffect(() => {
    if (searchParams.get("order") === null) {
      setValue(sortOptions[0]);
    }
  }, [searchParams]);
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
