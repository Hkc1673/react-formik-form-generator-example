export const loginFormData = [
    {
      id: "name",
      label: "User Name",
      placeholder: "Input user name",
      type: "text",
      validationType: "string",
      value: "",
      validations: [
        {
          type: "required",
          params: ["Name is required"],
        },
      ],
    },
    {
      id: "email",
      label: "Email",
      placeholder: "Input valid e-mail",
      type: "text",
      validationType: "string",
      value: "",
      validations: [
        {
          type: "required",
          params: ["Email is required"],
        },
        {
          type: "email",
          params: ["Please enter a valid email"],
        },
      ],
    },
    {
      id: "password",
      label: "Password",
      placeholder: "Input password",
      type: "text",
      validationType: "string",
      value: "",
      validations: [
        {
          type: "required",
          params: ["Password is required"],
        },
        {
          type: "min",
          params: [5, "Password is too short - should be 8 chars minimum."],
        },
        {
          type: "matches",
          params: [
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character",
          ],
        },
      ],
    },
  ];

export const SurveyFormData = [
    {
      id: "name",
      label: "Full Name",
      description: "Let's start with your full name",
      placeholder: "Type your answer here...",
      type: "text",
      validationType: "string",
      required: true,
      value: "",
      validations: [
        {
          type: "required",
          params: ["Name is required"],
        },
        {
          type: "min",
          params: [5, "Name can't be less than 5 characters"],
        },
        {
          type: "max",
          params: [10, "Name can't be more than 10 characters"],
        },
      ],
    },
    {
      id: "email",
      label: "Email",
      description: "Please input your email",
      placeholder: "Type your answer here...",
      type: "text",
      validationType: "string",
      required: true,
      value: "",
      validations: [
        {
          type: "required",
          params: ["Email is required"],
        },
        {
          type: "min",
          params: [5, "Email can't be less than 5 characters"],
        },
        {
          type: "max",
          params: [20, "Email can't be more than 20 characters"],
        },
        {
          type: "email",
          params: ["Please enter a valid email"],
        },
      ],
    },
    {
      id: "phone_number",
      label: "Phone Number",
      description: "Please input your phone number",
      placeholder: "Type your answer here...",
      type: "text",
      validationType: "number",
      required: true,
      value: "",
      validations: [
        {
          type: "required",
          params: ["Phone number is required"],
        },
      ],
    },
    {
      id: "work experience",
      label: "Work experience",
      description: "How many years of relevant work experience do you have?",
      placeholder: "Type your answer here...",
      type: "text",
      validationType: "number",
      required: false,
      value: "",
      validations: [
        {
          type: "min",
          params: [1, "there should be atleast 1 work experience"],
        },
        {
          type: "max",
          params: [5, "max work experience can be 5"],
        },
      ],
    },
    {
      id: "title",
      label: "Job Tİtle",
      description: "What's your job title?",
      placeholder: "Choose...",
      type: "select",
      validationType: "string",
      required: true,
      value: "",
      options: [{ value: "Front-end Developer" }, { value: "Back-end Developer" }, { value: "Full Stack Developer" }],
      validations: [
        {
          type: "required",
          params: ["Job title is required"],
        },
      ],
    },
    {
      id: "work enviroment",
      label: "Work Environment",
      description: "What Type of Work Environment Do You Prefer?",
      placeholder: "",
      type: "radio",
      validationType: "string",
      required: false,
      value: "",
      options: [{ value: "Remote" }, { value: "Hybrid" }, { value: "Onsite" }],
      validations: [],
    },
    {
      id: "techstack",
      label: "Tech Stack",
      description: "As a software engineer, what is your favorite technology stack?",
      placeholder: "",
      type: "checkbox",
      validationType: "string",
      required: false,
      value: "",
      options: [
        { value: "React" },
        { value: "Vue" },
        { value: "Angular" },
        { value: "Node JS" },
      ],
      validations: [],
    },
    
    {
      id: "open-ended",
      label: "Open-Ended",
      description: "If you could change just one thing in the package, what would it be?",
      placeholder: "Type your answer here...",
      type: "textarea",
      validationType: "string",
      required: false,
      value: "",
      validations: [
        {
          type: "max",
          params: [200, "Text can't be more than 200 characters"],
        },
        {
          type: "min",
          params: [10, "Text can't be less than 10 characters"],
        },
      ],
    },
  ];