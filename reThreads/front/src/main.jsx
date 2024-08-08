import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import App from "./App";

import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const styles = {
  global: (props) => ({
    ".darkBlack": {
      backgroundColor: mode("#FAFAFA !important", "#0A0A0A !important")(props),
      color: mode("#0A0A0A !important", "#FAFAFA !important")(props),
    },
    ".lightBlack": {
      backgroundColor: mode("#FFFFFF !important", "#181818 !important")(props),
      color: mode("#0A0A0A !important", "#FAFAFA !important")(props),
    },
    ".text": { color: mode("#0A0A0A !important", "#FAFAFA !important")(props) },
  }),
};

const theme = extendTheme({ config, styles });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
);
