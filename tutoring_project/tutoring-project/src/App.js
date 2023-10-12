import { ThemeProvider } from "styled-components";
import ThemeStyles from "styles/ThemeStyle";
import Topic from "page/Topic";

export default function App() {
  return (
    <ThemeProvider theme={ThemeStyles}>
      <div className="App">
        <Topic />
      </div>
    </ThemeProvider>
  );
}
