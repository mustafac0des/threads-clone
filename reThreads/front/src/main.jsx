import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const styles = {
  global: (props) => ({
    ".background": {
      backgroundColor: mode("#FAFAFA !important", "#0A0A0A !important")(props),
    },
    ".container": {
      backgroundColor: mode("#FFFFFF !important", "#181818 !important")(props),
    },
    ".text": {
      color: mode("#000000 !important", "#FDF5F7 !important")(props),
    },
    ".icon": {
      color: mode("#999999 !important", "#999999 !important")(props),
    },
  }),
};

const theme = extendTheme({ config, styles });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
