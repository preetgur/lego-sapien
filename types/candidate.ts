export interface CandidateResponseInterface {
  count: number;
  next: string | null;
  previous: string | null;
  results: CandidateInterface[];
}

export interface CandidateInterface {
  id: number | string;
  first_name: string;
  last_name: string;
  email: string;
  profile: string;
  experience: string | number | null;
  profile_created_at: string;
  resume_pdf_base64: string;
  photo_identity: string;
  was_invite_sent: boolean;
  photoidentity_base64?: string;
  // selection_status: string
  // interview_status: string
  interview_status: { label: string; value: string };
  selection_status: { label: string; value: string };

  task_id: string;
}

export interface UserActivationInterface {
  uid: string;
  token: string;
}

export interface ResetPasswordInterface {
  email: string;
  candidate_id?: number;
}

export interface ResetPasswordInterface2 {
  email: string;
}

export interface ConfirmOTPInterface {
  email: string;
  otp: string;
  candidate_id?: number;
}

export interface CandidateInterviewDataInterface {
  candidate_token: string;
}

export interface GithubInterface {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: any;
  hireable: any;
  bio: string;
  twitter_username: any;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface StackOverFlowInterface {
  items: Item[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}

export interface Item {
  owner: Owner;
  is_accepted: boolean;
  score: number;
  last_activity_date: number;
  creation_date: number;
  answer_id: number;
  question_id: number;
  content_license: string;
}

export interface Owner {
  account_id: number;
  reputation: number;
  user_id: number;
  user_type: string;
  profile_image: string;
  display_name: string;
  link: string;
}

export interface ResumeZipInterface {
  resumes_zip_file: string;
}
