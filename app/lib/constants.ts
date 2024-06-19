import { JobPostingFields } from "@/types/job";

export const URL = process.env.NEXT_PUBLIC_BASE_URL;
export const FRONTEND_HOSTED_URL = process.env.NEXT_PUBLIC_FRONTEND_HOSTED_URL;

export const GEOPIFY_API_URL = "https://api.geoapify.com";

export const GEOPIFY_API_KEY = process.env.NEXT_PUBLIC_GEOPIFY_API_KEY;

export const INTER_COLOR = "#FB607F";
export const INTER_LIGHT_COLOR = "#000000";
// input types
export const TYPE_TEXT = "text";
export const TYPE_EMAIL = "email";
export const TYPE_PASSWORD = "password";
export const TYPE_CHECKBOX = "checkbox";
export const TYPE_NUMBER = "number";

//file
export const IMAGE = "photo_identity";
export const PDF = "resume_pdf_base64";
export const RESUMES_ZIP_FILE = "resumes_zip_base64";

export const ACCESS_TOKEN = "access";
export const REFRESH_TOKEN = "refresh";
export const NEW_USER = "new-user";

// signup
export const FIRST_NAME = "first_name";
export const LAST_NAME = "last_name";
export const EMAIL = "email";
export const COMPANY = "company";
export const PASSWORD = "password";
export const RE_PASSWORD = "re_password";
export const USERNAME = "username";
export const TERM_CHECK = "termCheck";
export const DEPARTMENT = "department";
export const DEPARTMENT_2 = "department";
export const MOBILE_NUMBER = "mobile_no";
export const SECTOR = "sector";

// question-bank
export const CATEGORY = "category";
export const QB_FILE_BASE64 = "qb_file_base64";
export const QUESTION = "question";
export const IDEAL_ANSWER = "ideal_answer";

// reset-password
export const NEW_PASSWORD = "new_password";
export const RE_NEW_PASSWORD = "re_new_password";
// candidate
export const PROFILE = "profile";
export const EXPERIENCE = "experience";
export const SELECTION_STATUS = "selection_status";
export const INTERVIEW_STATUS = "interview_status";
export const COMMUNICATION_SKILLS = "communication_skills";
export const PHOTO_IDENTITY_BASE64 = "photoidentity_base64";
export const CANDIDATE_LEVEL = "candidate_level";
export const STUDENT = "STUDENT";
// candidate social links
export const LINKEDIN = "linkedin";
export const GITHUB = "github";
export const FACEBOOK = "facebook";
export const STACKOVERFLOW = "stackoverflow";

// 5 MB Size
export const IMAGE_FILE_SIZE = 15000000;
export const PASSED = "PASSED";
export const SIGN_UP_FIELDS = {
  [USERNAME]: {
    value: null,
    label: "Username",
    type: TYPE_TEXT,
    placeholder: "Enter Your Username",
  },
  [FIRST_NAME]: {
    value: null,
    label: "First Name",
    type: TYPE_TEXT,
    placeholder: "Enter Your First Name",
  },
  [LAST_NAME]: {
    value: null,
    label: "Last Name",
    type: TYPE_TEXT,
    placeholder: "Enter Your Last Name",
  },
  [EMAIL]: {
    value: null,
    label: "Work Email",
    type: TYPE_EMAIL,
    placeholder: "Enter Your Email Address",
  },
  [COMPANY]: {
    value: null,
    label: "Company",
    type: TYPE_TEXT,
    placeholder: "Enter Company Name",
  },
  [PASSWORD]: {
    value: null,
    label: " Your Password",
    type: TYPE_PASSWORD,
    placeholder: "Enter Your Password",
  },
  [RE_PASSWORD]: {
    value: null,
    label: " Confirm Password",
    type: TYPE_PASSWORD,
    placeholder: "Confirm Your Password",
  },
  [DEPARTMENT]: {
    value: null,
    label: "Department",
    type: TYPE_TEXT,
    placeholder: "Enter Your Department Name",
  },
  [SECTOR]: {
    value: null,
    label: "Sector",
    type: TYPE_TEXT,
    placeholder: "Enter Your Sector Name",
  },
};

// social link form
export const SOCIAL_LINKS_FIELDS = {
  [LINKEDIN]: {
    value: null,
    label: "Linkedin",
    type: TYPE_TEXT,
    placeholder: "Enter Your Linkedin url",
  },
  [GITHUB]: {
    value: null,
    label: "Github",
    type: TYPE_TEXT,
    placeholder: "Enter Git Username",
  },
  [FACEBOOK]: {
    value: null,
    label: "Facebook",
    type: TYPE_TEXT,
    placeholder: "Enter Your Facebook url",
  },
  [STACKOVERFLOW]: {
    value: null,
    label: "Stackoverflow",
    type: TYPE_TEXT,
    placeholder: "Enter Your User Id",
  },
};

export const ADD_QUESTION_CATEGORY = {
  [QUESTION]: {
    value: null,
    label: "Question",
    type: TYPE_TEXT,
    placeholder: "Enter Question",
  },
  [IDEAL_ANSWER]: {
    value: null,
    label: "Ideal Answer",
    type: TYPE_TEXT,
    placeholder: "Enter Ideal Answer",
  },
};
// candidate form

export const IN_PROGRESS = "IP";
export const SELECTED = "S";
export const REJECTED = "R";
export const ON_HOLD = "OH";
export const RESUME_UPLOADED = "RU";
export const INVITE_SENT = "IS";
export const INTERVIEW_GIVEN = "IG";
export const FITMENT_FAILED = "FF";
export const FITMENT_PASSED = "FP";
export const INTERVIEW_STATUS_LABEL = {
  [IN_PROGRESS]: "In Progress",
  [RESUME_UPLOADED]: "Resume Uploaded",
  [INVITE_SENT]: "Invite Sent",
  [INTERVIEW_GIVEN]: "Interview Given",
  [FITMENT_FAILED]: "Fitment Failed",
  [FITMENT_PASSED]: "Fitment Passed",
};

export const EXPERIENCE_RANGE_STATUS_LABEL = {
  0: "0-2",
  2: "2-5",
  5: "5-8",
  8: "8-11",
  11: "11-15",
  15: "15+",
};
export const SELECTION_STATUS_LABEL = {
  [IN_PROGRESS]: "In Progress",
  [SELECTED]: "Selected",
  [REJECTED]: "Rejected",
  [ON_HOLD]: "On Hold",
};

export const SELECTION_STATUS_COLOR = {
  [IN_PROGRESS]: "text-[#F8A978]",
  [SELECTED]: "text-[#5D9C59]",
  [REJECTED]: "text-[#F68787]",
  [ON_HOLD]: "text-[#F1EB9A]",
};

export const SELECTION_STATUS_LIST = [
  {
    value: IN_PROGRESS,
    label: "In Progress",
  },
  {
    value: SELECTED,
    label: "Selected",
  },
  {
    value: REJECTED,
    label: "Rejected",
  },
  {
    value: ON_HOLD,
    label: "On Hold",
  },
];

export const INTERVIEW_STATUS_LIST = [
  {
    value: IN_PROGRESS,
    label: "In Progress",
  },
  {
    value: RESUME_UPLOADED,
    label: "Resume Uploaded",
  },
  {
    value: INVITE_SENT,
    label: "Invite Sent",
  },
  {
    value: INTERVIEW_GIVEN,
    label: "Interview Given",
  },
];

export const COMMUNICATION_SKILLS_LIST = [
  {
    value: "Weak",
    label: "Weak",
  },
  {
    value: "Average",
    label: "Average",
  },
  {
    value: "Good",
    label: "Good",
  },
  {
    value: "Excellent",
    label: "Excellent",
  },
];

export const CANDIDATE_FIELDS = {
  [FIRST_NAME]: {
    value: null,
    label: "First Name",
    type: TYPE_TEXT,
    placeholder: "Enter First Name",
  },
  [LAST_NAME]: {
    value: null,
    label: "Last Name",
    type: TYPE_TEXT,
    placeholder: "Enter Last Name",
  },
  [PROFILE]: {
    value: null,
    label: "Profile",
    type: TYPE_TEXT,
    placeholder: "Enter Profile",
  },
  [MOBILE_NUMBER]: {
    value: null,
    label: "Mobile Number",
    type: TYPE_TEXT,
    placeholder: "Enter Mobile Number",
  },
  [EMAIL]: {
    value: null,
    label: "Email Id",
    type: TYPE_EMAIL,
    placeholder: "Enter Email Address",
  },
  [EXPERIENCE]: {
    value: null,
    label: "Experience",
    type: TYPE_TEXT,
    placeholder: "Enter Experience",
  },
  [SELECTION_STATUS]: {
    value: null,
    label: " Your Password",
    type: TYPE_TEXT,
    placeholder: "Select Status",
  },
};
// Job
export const JOB_TITLE = "job_title";
export const JOB_DESCRIPTION = "job_description";
export const JOB_PRIMARY_TECHNOLOGIES = "job_primary_technologies";
export const JOB_SECONDARY_TECHNOLOGIES = "job_secondary_technologies"; // wrong
export const SHOULD_RECORD_VIDEO = "should_record_video";
export const N_QUESTIONS = "n_questions";
export const SHOULD_ASK_FOLLOWUP = "should_ask_followup";
export const N_FOLLOWUP_QUESTIONS = "n_followup_questions";
export const SHOULD_VIRTUAL_INTERVIEWER_CALL =
  "should_virtual_interviewer_call";
export const SHOULD_ASK_DEFAULT_QUESTIONS = "should_ask_default_questions";
export const DEFAULT_QUESTIONS = "default_questions";
export const ROLE_DESCRIPTION = "role_description";
export const EMAIL_SUBJECT = "email_subject";
export const EMAIL_BODY = "email_body";
export const INTRO_MESSAGE = "intro_message";
export const EXPERIENCE_RANGE = "experience_range";
export const SECTOR_NAME = "sector_name";
export const ACCESS_TO = "access_to";
export const COUNTRY = "country";
export const STATE = "state";
export const CITY = "city";
export const CTC_MIN = "ctc_min";
export const CTC_MAX = "ctc_max";
export const CURRENCY = "currency";
export const FITMENT_QUESTIONS = "fitment_questions";
export const SHOULD_ASK_FITMENT_QUESTIONS = "should_ask_fitment_questions";
export const IS_REMOTE_LOCATION = "is_remote_location";
export const REMOTE = "remote";
export const JOB_TYPE = "job_type";
export const NOTICE_PERIOD = "notice_period";
export const JOB_LOCATION = "job_location";
export const LANGUAGE = "language_code";
export const CANDIDATE_LANGUAGE = "candidate_language_code";
export const FLOW_TYPE = "flow_type";

// Example usage:
export const JOB_POSTING_FIELDS: JobPostingFields = {
  [DEPARTMENT]: {
    value: null,
    label: "Department",
    type: TYPE_TEXT,
    placeholder: "Enter Your Department",
  },
  [JOB_TITLE]: {
    value: null,
    label: "Title",
    type: TYPE_TEXT,
    placeholder: "Enter Job Title",
  },
  [JOB_DESCRIPTION]: {
    value: null,
    label: "Description",
    type: TYPE_TEXT,
    placeholder: "Enter Job Description",
    name: "job_description",
  },
  [JOB_PRIMARY_TECHNOLOGIES]: {
    value: null,
    label: "Primary Skills",
    type: TYPE_TEXT,
    placeholder: "Enter Your Primary Skills",
  },
  [JOB_SECONDARY_TECHNOLOGIES]: {
    value: null,
    label: "Secondary Skills",
    type: TYPE_TEXT,
    placeholder: "Enter Your Secondary Skills",
  },
  [SHOULD_RECORD_VIDEO]: {
    value: false,
    label: "Enable video recording",
    type: TYPE_CHECKBOX,
    placeholder: "Enable video recording",
    name: SHOULD_RECORD_VIDEO,
  },
  [N_QUESTIONS]: {
    value: null,
    label: "No of Questions",
    type: TYPE_NUMBER,
    placeholder: "Enter Number of Questions",
  },
  [SHOULD_ASK_FOLLOWUP]: {
    value: null,
    label: "Enable follow up",
    type: TYPE_CHECKBOX,
    placeholder: "Enable follow up",
    name: SHOULD_ASK_FOLLOWUP,
  },
  [N_FOLLOWUP_QUESTIONS]: {
    value: null,
    label: "Number of FollowUp Questions",
    type: TYPE_NUMBER,
    placeholder: "Enter No. of Follow up Questioins",
  },
  [SHOULD_VIRTUAL_INTERVIEWER_CALL]: {
    value: null,
    label: "Enable virtual interviewer call",
    type: TYPE_CHECKBOX,
    placeholder: "Enable virtual interviewer call",
    name: SHOULD_VIRTUAL_INTERVIEWER_CALL,
  },
  [SHOULD_ASK_DEFAULT_QUESTIONS]: {
    value: null,
    label:
      "Do you want to ask your 'Default Questions' in addition to the system generated questions?",
    type: TYPE_CHECKBOX,
    placeholder: "Should Ask Default Questions",
    name: SHOULD_ASK_DEFAULT_QUESTIONS,
  },
  [INTRO_MESSAGE]: {
    value: "",
    label: "Intro Message",
    type: TYPE_TEXT,
    placeholder: "Enter Intro Message",
    name: "intro_message",
  },
  [ROLE_DESCRIPTION]: {
    value: "",
    label: "Role Description",
    type: TYPE_TEXT,
    placeholder: "Enter Role Description",
    name: "role_description",
  },
  [EMAIL_SUBJECT]: {
    value: "",
    label: "Email Subject",
    type: TYPE_TEXT,
    placeholder: "Enter Email Subject",
  },
  [EMAIL_BODY]: {
    value: "",
    label: "Email Body",
    type: TYPE_TEXT,
    placeholder: "Enter Email Body",
    name: "email_body",
  },

  [SECTOR_NAME]: {
    value: null,
    label: "Sector",
    type: TYPE_TEXT,
    placeholder: "Select Sector",
  },
  [NOTICE_PERIOD]: {
    value: null,
    label: "Max Notice Period (In Days)",
    type: TYPE_NUMBER,
    placeholder: "Enter Notice Period",
  },
  [LANGUAGE]: {
    value: null,
    label: "Language",
    type: TYPE_TEXT,
    placeholder: "Enter Langauge",
  },
};

export const PASSWORD_RESET_FIELDS = {
  [NEW_PASSWORD]: {
    value: null,
    label: "New Password",
    type: TYPE_PASSWORD,
    placeholder: "Enter Your New Password",
  },
  [RE_NEW_PASSWORD]: {
    value: null,
    label: "Confirm New Password",
    type: TYPE_PASSWORD,
    placeholder: "Enter Your New Password Again",
  },
};

export const THEME_COLORS = [
  "#FFEBEE",
  "#ECEFF1",
  "#FCE4EC",
  "#EDE7F6",
  "#E3F2FD",
  "#FFF3E0",
  "#E8EAF6",
  "#F3E5F5",
  "#E8F5E9",
  "#EFEBE9",
  "#FFFDE7",
  "#F9FBE7",
  "#E1F5FE",
  "#E0F2F1",
  "#F1F8E9",
  "#E0F7FA",
  "#FFF8E1",
  "#FBE9E7",
];

export const COLORS = [
  {
    _id: 1,
    name: "red",
  },
  {
    _id: 2,
    name: "blue",
  },
  {
    _id: 3,
    name: "pink",
  },
  {
    _id: 4,
    name: "yello",
  },
];

export const PRIMARY_TECH = [
  {
    value: 1,
    label: "Data Security",
  },
  {
    value: 2,
    label: "ReactJs",
  },
  {
    value: 3,
    label: "NodeJs",
  },
  {
    value: 4,
    label: "ReactNative",
  },
  {
    value: 5,
    label: "REST APIs Integration with React Native",
  },
  {
    value: 6,
    label: "Frappe",
  },
  {
    value: 7,
    label: "ERPNext",
  },
  {
    value: 8,
    label: "Azure Data Engineer",
  },
  {
    value: 9,
    label: "Azure DataFactory",
  },
  {
    value: 10,
    label: "Azure DataLake",
  },
  {
    value: 11,
    label: "SQL",
  },
  {
    value: 12,
    label: "PLSQL",
  },
  {
    value: 13,
    label: "Stored Procedures",
  },
  {
    value: 14,
    label: "Triggers",
  },
  {
    value: 15,
    label: "Index",
  },
  {
    value: 16,
    label: "Java",
  },

  {
    value: 17,
    label: "Microservices",
  },
  {
    value: 18,
    label: "Spring Framework",
  },
  {
    value: 19,
    label: "Python",
  },
  {
    value: 20,
    label: "Django",
  },
  {
    value: 21,
    label: "Flask",
  },
  {
    value: 22,
    label: ".NetI",
  },
  {
    value: 23,
    label: ".Net Core API",
  },
  {
    value: 24,
    label: "Azure App Service",
  },
  {
    value: 25,
    label: "Azure Functions",
  },
  {
    value: 26,
    label: "Azure Logic Apps",
  },
  {
    value: 27,
    label: "AWS Lambda",
  },
  {
    value: 28,
    label: "AWS S3",
  },
  {
    value: 29,
    label: "AWS Route53",
  },
  {
    value: 30,
    label: "Automation Testing",
  },
  {
    value: 31,
    label: "Selenium",
  },
  {
    value: 32,
    label: "API Automation",
  },
  {
    value: 33,
    label: "data encryption",
  },
  {
    value: 34,
    label: "data erasure",
  },
  {
    value: 35,
    label: "data masking",
  },
  {
    value: 36,
    label: "data resiliency",
  },
  {
    value: 37,
    label: "HTML",
  },
  {
    value: 38,
    label: "CSS",
  },
  {
    value: 39,
    label: "TailWind",
  },
  {
    value: 40,
    label: "JavaScript",
  },
  {
    value: 41,
    label: "Redux",
  },
  {
    value: 42,
    label: "Firebase notification",
  },
  {
    value: 43,
    label: "Jquery",
  },
  {
    value: 44,
    label: "Python Pandas",
  },
  {
    value: 45,
    label: "Python NumPy",
  },
  {
    value: 46,
    label: "Frappe Hooks",
  },
  {
    value: 47,
    label: "Azure BLOB",
  },
  {
    value: 48,
    label: "SQL query optimization",
  },
  {
    value: 49,
    label: "SQL stored procedure debug",
  },
  {
    value: 50,
    label: "RESTful APIs and JSON/SOAP based API with Java",
  },
  {
    value: 51,
    label: "Microservices",
  },
  {
    value: 52,
    label: "Azure App",
  },
  {
    value: 53,
    label: "Mysql",
  },
  {
    value: 54,
    label: "Python API integration to Flask",
  },
  {
    value: 55,
    label: "MS SQL SQL Query",
  },
  {
    value: 56,
    label: "SQL Stored procedures",
  },
  {
    value: 57,
    label: "SQL Triggers",
  },
  {
    value: 58,
    label: "SQL Views",
  },
  {
    value: 59,
    label: "Azure BLOB",
  },
  {
    value: 60,
    label: "Azure Devops",
  },
  {
    value: 61,
    label: "Azure Api Gateway",
  },
  {
    value: 62,
    label: "AWS Glue",
  },
  {
    value: 63,
    label: "AWS EC2",
  },
  {
    value: 64,
    label: "TestNG",
  },
  {
    value: 65,
    label: "Junit",
  },
  {
    value: 66,
    label: "Selenium Grid",
  },
  {
    value: 67,
    label: "API Testing",
  },
  {
    value: 68,
    label: "Kafka",
  },
  {
    value: 69,
    label: "kafka Cluster",
  },
  {
    value: 70,
    label: "Apache Nifi",
  },
  {
    value: 71,
    label: "MongoDB",
  },
  {
    value: 72,
    label: "MongoDB sharding",
  },
  {
    value: 73,
    label: "Oracle",
  },
  {
    value: 74,
    label: "Oracle TSQL",
  },
  {
    value: 75,
    label: "pySpark",
  },
  {
    value: 76,
    label: "Hbase",
  },
  {
    value: 77,
    label: "Hive",
  },
  {
    value: 78,
    label: "Jira",
  },
  {
    value: 79,
    label: "Git",
  },
  {
    value: 80,
    label: "Jenkins",
  },
];

export const SELECTION_QUESTION_TYPES = [
  {
    value: "D",
    label: "Descriptive",
  },
  {
    value: "O",
    label: "Objective",
  },
  {
    value: "C",
    label: "Coding",
  },
  {
    value: "CS",
    label: "Communication Skills",
  },
  {
    value: "Common",
    label: "Common",
  },
];

export const EXPERIENCE_RANGE_TYPES = [
  {
    value: "0",
    label: "0-2",
  },
  {
    value: "2",
    label: "2-5",
  },
  {
    value: "5",
    label: "5-8",
  },
  {
    value: "8",
    label: "8-11",
  },
  {
    value: "11",
    label: "11-15",
  },
  {
    value: "15",
    label: "15+",
  },
];

export const CANDIDATE_LEVEL_TYPES = [
  {
    value: "UNKNOWN",
    label: "Unknown",
  },
  {
    value: "STUDENT",
    label: "Student",
  },
  {
    value: "JUNIOR",
    label: "Junior",
  },
  {
    value: "MID",
    label: "Mid Level",
  },
  {
    value: "SENIOR",
    label: "Senior",
  },
];

export const SECONDARY_TECH = [
  {
    value: 1,
    label: "encryption, data erasure, data masking, data resiliency",
  },
  {
    value: 2,
    label: "HTML, CSS, TailWind, JavaScript, Redux",
  },
  {
    value: 3,
    label: "Firebase notification, Javascript, Redux",
  },
  {
    value: 4,
    label: "Python Pandas, Python NumPy, Frappe Hooks",
  },
  {
    value: 5,
    label: "Azure BLOB",
  },
  {
    value: 6,
    label: "SQL query optimization, SQL stored procedure debug",
  },
  {
    value: 7,
    label:
      "RESTful APIs and JSON/SOAP based API with Java, Microservices, Azure App",
  },
  {
    value: 8,
    label: "Jquery, Mysql, Python API integration to Flask",
  },
  {
    value: 9,
    label: "MS SQL SQL Query, SQL Stored procedures, SQL Triggers, SQL Views",
  },
  {
    value: 10,
    label: "Azure BLOB, Azure Devops, Azure Api Gateway",
  },
  {
    value: 11,
    label: "AWS Glue, AWS EC2",
  },
  {
    value: 12,
    label: "TestNG, Junit, Selenium Grid, API Testing",
  },
];

export const SECTOR_OPTIONS = [
  {
    value: "IT",
    label: "IT",
  },
  {
    value: "PHARMA",
    label: "PHARMA",
  },
  {
    value: "BFSI",
    label: "BFSI",
  },
];

export const JOB_TYPE_OPTIONS = [
  {
    label: "Work From Office",
    value: "WFO",
  },
  {
    value: "Hybrid",
    label: "Hybrid",
  },
  {
    label: "Work From Home",
    value: "WFH",
  },
];

export const JOB_TYPE_CONSTANTS = {
  WFO: "Work From Office",
  Hybrid: "Hybrid",
  WFH: "Work From Home",
};

export interface CustomFile extends File {
  preview?: string;
}

export const ACCURACY_RANGES = [
  { min: 90, max: 100, label: "Excellent", colorClass: "#1B998B" },
  { min: 80, max: 89, label: "Very Good", colorClass: "#009DDC" },
  { min: 70, max: 79, label: "Good", colorClass: "orange" },
  { min: 60, max: 69, label: "Average", colorClass: "#E9C46A" },
  { min: 50, max: 59, label: "Weak", colorClass: "brown" },
  { min: 0, max: 49, label: "Unsatisfactory", colorClass: "#E84855" },
];

export const LOCATION_QUESTIONS_LIST = [
  {
    id: "4",
    question: "What is your current location?",
    tag: "location",
    question_type: { label: "Common", value: "Common" },
    will_terminate: false,
    type: "text",
    isEditable: false,
    name: "your_current_location",
  },
  // {
  //   question: "Are you willing to relocate to ",
  //   tag: "location",
  //   question_type: { label: "Common", value: "Common" },
  //   will_terminate: true,
  //   type: "text",
  //   isEditable: false,
  // },
];

export const COMMON_QUESTIONS_LIST = [
  {
    id: "1",
    question: "What is your current CTC?",
    tag: "common",
    question_type: { label: "Common", value: "Common" },
    will_terminate: false,
    type: "number",
    isEditable: false,
    name: "current_ctc",
  },
  {
    id: "2",
    question: "What is your expected CTC?",
    tag: "common",
    question_type: { label: "Common", value: "Common" },
    will_terminate: false,
    type: "number",
    isEditable: false,
    name: "expected_ctc",
  },
  {
    id: "3",
    question: "What is your notice period (In days)?",
    tag: "common",
    question_type: { label: "Common", value: "Common" },
    will_terminate: true,
    type: "number",
    isEditable: false,
    name: "notice_period",
  },
];

export const LANGUAGE_LIST = [
  { value: "ar", label: "Arabic" },
  { value: "hy", label: "Armenian" },
  { value: "az", label: "Azerbaijani" },
  { value: "eu", label: "Basque" },
  { value: "bn", label: "Bengali" },
  { value: "bs", label: "Bosnian" },
  { value: "bg", label: "Bulgarian" },
  { value: "ca", label: "Catalan" },
  { value: "ceb", label: "Cebuano" },
  { value: "ny", label: "Chichewa" },
  { value: "co", label: "Corsican" },
  { value: "hr", label: "Croatian" },
  { value: "cs", label: "Czech" },
  { value: "da", label: "Danish" },
  { value: "nl", label: "Dutch" },
  { value: "en", label: "English" },
  { value: "eo", label: "Esperanto" },
  { value: "et", label: "Estonian" },
  { value: "tl", label: "Filipino" },
  { value: "fi", label: "Finnish" },
  { value: "fr", label: "French" },
  { value: "fy", label: "Frisian" },
  { value: "gl", label: "Galician" },
  { value: "ka", label: "Georgian" },
  { value: "de", label: "German" },
  { value: "el", label: "Greek" },
  { value: "gu", label: "Gujarati" },
  { value: "ht", label: "Haitian creole" },
  { value: "ha", label: "Hausa" },
  { value: "haw", label: "Hawaiian" },
  { value: "iw", label: "Hebrew" },
  { value: "he", label: "Hebrew" },
  { value: "hi", label: "Hindi" },
  { value: "hmn", label: "Hmong" },
  { value: "hu", label: "Hungarian" },
  { value: "is", label: "Icelandic" },
  { value: "id", label: "Indonesian" },
  { value: "ga", label: "Irish" },
  { value: "it", label: "Italian" },
  { value: "ja", label: "Japanese" },
  { value: "jw", label: "Javanese" },
  { value: "kn", label: "Kannada" },
  { value: "kk", label: "Kazakh" },
  { value: "km", label: "Khmer" },
  { value: "ko", label: "Korean" },
  { value: "ku", label: "Kurdish (kurmanji)" },
  { value: "ky", label: "Kyrgyz" },
  { value: "lo", label: "Lao" },
  { value: "la", label: "Latin" },
  { value: "lv", label: "Latvian" },
  { value: "lt", label: "Lithuanian" },
  { value: "lb", label: "Luxembourgish" },
  { value: "mk", label: "Macedonian" },
  { value: "mg", label: "Malagasy" },
  { value: "ms", label: "Malay" },
  { value: "ml", label: "Malayalam" },
  { value: "mt", label: "Maltese" },
  { value: "mi", label: "Maori" },
  { value: "mr", label: "Marathi" },
  { value: "mn", label: "Mongolian" },
  { value: "my", label: "Myanmar (burmese)" },
  { value: "ne", label: "Nepali" },
  { value: "no", label: "Norwegian" },
  { value: "or", label: "Odia" },
  { value: "ps", label: "Pashto" },
  { value: "fa", label: "Persian" },
  { value: "pl", label: "Polish" },
  { value: "pt", label: "Portuguese" },
  { value: "pa", label: "Punjabi" },
  { value: "ro", label: "Romanian" },
  { value: "ru", label: "Russian" },
  { value: "sm", label: "Samoan" },
  { value: "gd", label: "Scots Gaelic" },
  { value: "sr", label: "Serbian" },
  { value: "st", label: "Sesotho" },
  { value: "sn", label: "Shona" },
  { value: "sd", label: "Sindhi" },
  { value: "si", label: "Sinhala" },
  { value: "sk", label: "Slovak" },
  { value: "sl", label: "Slovenian" },
  { value: "so", label: "Somali" },
  { value: "es", label: "Spanish" },
  { value: "su", label: "Sundanese" },
  { value: "sv", label: "Swedish" },
  { value: "tg", label: "Tajik" },
  { value: "ta", label: "Tamil" },
  { value: "te", label: "Telugu" },
  { value: "th", label: "Thai" },
  { value: "tr", label: "Turkish" },
  { value: "uk", label: "Ukrainian" },
  { value: "ur", label: "Urdu" },
  { value: "ug", label: "Uyghur" },
  { value: "uz", label: "Uzbek" },
  { value: "vi", label: "Vietnamese" },
];

export const FLOW_TYPE_LIST = [
  { value: "ALL_WEB", label: "Fitment and Interview on Web" },
  { value: "ALL_WA", label: "Fitment and Interview on Whatsapp" },
  { value: "WA_WEB", label: "Fitment on Whatsapp and Interview on Web" },
];
