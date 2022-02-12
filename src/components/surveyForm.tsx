import React from "react";
import ReactFormGenerator from "react-formik-form-generator";
import { SurveyFormData } from "../mockData/mockData";
import { SurveyFormContainer } from "./_style";

const SurveyForm = () => {
  const onSubmit = (values: {}) => {
    alert(JSON.stringify(values));
    console.log("Survey Form Values", values);
  };
  return (
    <SurveyFormContainer>
      <h1>Questionnaire</h1>
      <ReactFormGenerator
        formData={SurveyFormData}
        buttonTitle={"Submit"}
        onSubmit={onSubmit}
      />
    </SurveyFormContainer>
  );
};

export default SurveyForm;
