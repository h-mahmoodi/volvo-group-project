import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import "./styles/global.css";
import swDev from "./swDev";
import { FavoriteContextProvider } from "./context/FavoriteContext";
import { AppContextProvider } from "./context/AppContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <FavoriteContextProvider>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </FavoriteContextProvider>
    </AppContextProvider>
  </React.StrictMode>
);

swDev();
