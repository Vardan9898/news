import { MantineProvider } from "@mantine/core";
import { FC, PropsWithChildren, StrictMode } from "react";

export const CompositeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StrictMode>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {children}
      </MantineProvider>
    </StrictMode>
  );
};
