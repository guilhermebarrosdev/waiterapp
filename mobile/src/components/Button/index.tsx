import { ReactNode } from "react";
import { Text } from "../Text";

import { Container } from "./styles";

interface ButtonProps {
  children: ReactNode;
  onPress: () => void;
  disabled?: boolean;
}

export function Button({ children, onPress, disabled }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Text weight="600" color="#fff">
        {children}
      </Text>
    </Container>
  );
}
