import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/styles";
import theme from "./assets/style/theme";
import MainTemplateContainer from "./shared/MainTemplate/MainTemplateContainer";
import routes from "./routes/routes";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainTemplateContainer>
          <Routes>
            {routes().map(({path, component: Component},index) => {
              return (
                <Route
                  path={path}
                  exact
                  element={<Component/>}
                  key={index}
                />
              );
            })}
          </Routes>
        </MainTemplateContainer>
      </BrowserRouter>
    </ThemeProvider>
    </div>
  
  );
};

export default App;