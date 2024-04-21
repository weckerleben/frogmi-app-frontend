import React from "react";
import { Text, Radio, RadioGroup, Stack } from "@chakra-ui/react";

const PerPageSelector = ({ value, onChange, options }) => {
  return (
    <RadioGroup onChange={onChange} value={value} colorScheme="teal">
      <Stack direction="row">
        <Text>Por página:</Text>
        {options.map((option) => (
          <Radio key={option} value={option}>
            {option}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
};

export default PerPageSelector;
