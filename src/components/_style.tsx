import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;
  margin-top: 50px;
  padding: 30px 50px;
`;
export const SurveyFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  border-radius: 5px;
  padding: 30px 50px;
  h1 {
    letter-spacing: 1px;
    color: #00b4ef;
  }
`;

export const Button = styled.button`
  margin: 10px;
  align-items: center;
  appearance: none;
  background-image: radial-gradient(
    100% 100% at 100% 0,
    #5adaff 0,
    #5468ff 100%
  );
  border: 0;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
  &:focus {
    box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  }
  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: #3c4fe0 0 3px 7px inset;
    transform: translateY(2px);
  }
`;
