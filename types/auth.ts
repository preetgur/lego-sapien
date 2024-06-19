export type SignUpInterface = {
  first_name: string;
  last_name: string;
  email: string;
  sector: { label: string; value: string; __isNew__?: boolean };
  // company: string;
  department: { label: string; value: string; __isNew__?: boolean };
  company: { label: string; value: string; __isNew__?: boolean };

  // username: string;
  password: string;
  re_password: string;
  termCheck?: boolean;
};

export type LoginInterface = {
  email: string;
  password: string;
};

type SelectionStatus = {
  value: "IP" | "S" | "R" | "OH";
  label: "In Progress" | "Selected" | "Rejected" | "On Hold";
};
export interface CandidateInterface {
  id: string | number;
  jobId: string | number;
  first_name: string;
  last_name: string;
  email: string;
  profile?: string;
  // experience?: string | number;
  experience: { label: string; value: string };
  candidate_level: { label: string; value: string };
  resume_pdf_base64?: string;
  photo_identity?: string;
  additional_info?: {
    questions_generated: string;
  };
  // selection_status: SelectionStatus
  selection_status: { label: string; value: string } | null | string;
  interview_status: { label: string; value: string } | null | string;
  profile_created_at?: string;
  mobile_no?: string;
  was_invite_sent?: boolean;
  candidate_language_code?: { label: string; value: string } | string;
}

export interface FormCandidateInterface {
  first_name: string;
  last_name: string;
  email: string;
  // experience?: string | number;
  experience: { label: string; value: string };
  candidate_level: { label: string; value: string };
  resume_pdf_base64: string;
  photo_identity: string;
  mobile_no: string;
  candidate_language_code?: { label: string; value: string };
}

export interface AddCandidateInterface extends FormCandidateInterface {
  jobId: string | number;
}

export type UserInterface = {
  email: string;
  first_name: string;
  username: string;
  company: string;
  last_name: string;
  id: string | number;
  createdAt?: string;
  department?: string;
  sector?: string;
};

export interface PasswordResetInterface {
  uid: string;
  token: string;
  new_password: string;
  re_new_password: string;
}

export type UpdateUserInterface = {
  // company: string;
  department?: string;
  sector?: string;
};

export interface UpdateCandidateInterface {
  id: number;
  jobId?: string | number;
  first_name?: string;
  last_name?: string;
  email?: string;
  profile?: string;
  experience?: string;
  resume_pdf_base64?: string;
  photo_identity?: string;
  // selection_status: SelectionStatus
  selection_status?: string;
  was_invite_sent?: boolean;
  profile_created_at?: string;
  mobile_no?: string;
  task_id?: string;
  interview_status?: string;
  is_deleted?: boolean;
  github?: string;
  stackoverflow?: string;
  additional_info?: {
    sessions: Array<any>;
    identity_verification: {
      verification_completed: boolean;
      verification_status: string;
    };
  };
  candidate_fitment?: Array<{
    fitment_response: [];
    fitment_messages: [];
    status: string;
  }>;
}
