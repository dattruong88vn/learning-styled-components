import { createGlobalStyle, ThemeProvider } from "styled-components";

import ButtonCustom, {
  FancyButton,
  SubmitButton,
  DarkButton,
  AnimatedLogo,
} from "./components/base";
import "./App.css";
import logo from "./logo.svg";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
  fontFamily: "Consolas",
};

const GlobalStyle = createGlobalStyle`
  button {
    font-family: ${(props) => props.theme.fontFamily};
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <div>
          <AnimatedLogo src={logo} />
        </div>
        <ButtonCustom>Styled Button</ButtonCustom>
        <div>
          <br />
        </div>
        <ButtonCustom variant="outline">Styled Button Outlined</ButtonCustom>
        <div>
          <br />
        </div>
        <FancyButton>Fancy Button</FancyButton>
        <div>
          <br />
        </div>
        <SubmitButton>Submit Button</SubmitButton>
        <div>
          <br />
        </div>
        <DarkButton>Dark Button</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
