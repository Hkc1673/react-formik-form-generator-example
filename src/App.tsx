import React, { useState } from "react";
import LoginForm from "./components/loginForm";
import SurveyForm from "./components/surveyForm";
import { AppContainer, Button } from "./components/_style";

function App() {
  const [isSurvey, setIsSurvey] = useState(false);
  return (
    <AppContainer>
      <Button onClick={() => setIsSurvey(!isSurvey)}>
        {isSurvey ? "Login Form" : "Survey Form"}
      </Button>
      {!isSurvey && <LoginForm />}

      {isSurvey && <SurveyForm />}
    </AppContainer>
  );
}

export default App;
