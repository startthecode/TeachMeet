import { AllRoutes } from "./routes/AllRoutes";
import { Provider as ReduxProvider } from "react-redux";
import { QueryClientProvider } from "react-query";
import { configReactQuery } from "./config/reactQuery";
import { reduxStore } from "./redux/stores";
import { createTheme, MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import "./assets/scss/main.scss";

const theme = createTheme({
  /** Put your mantine theme override here */
});
function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <QueryClientProvider client={configReactQuery}>
        <MantineProvider theme={theme}>
          <AllRoutes />
        </MantineProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
}

export default App;
