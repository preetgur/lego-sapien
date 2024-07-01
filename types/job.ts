export interface Job_API_RESPONSE_INTERFACE {
  id: number;
  job_token: string;
  posting_created_at: Date;
  posting_updated_at: Date;
  is_active: boolean;
  candidate_count: number;
  department: string;
  job_title: string;
  job_type: "WFO" | "Hybrid" | "WFH";
  job_description: string;
  qb_category_ids: string[];
  job_primary_technologies: Array<{ label: string; value: string }>;
  job_secondary_technologies: Array<{ label: string; value: string }>;
  sector_name: { label: string; value: string };
  should_record_video: boolean;
  n_questions: number;
  should_ask_followup: boolean;
  n_followup_questions: number;
  should_virtual_interviewer_call: boolean;
  intro_message: string;
  role_description: string;
  email_subject: string;
  email_body: string;
  should_ask_default_questions: boolean;
  default_questions: Array<{
    question: string;
    question_type: { label: string; value: string };
  }>;
  fitment_questions: Array<{
    question: string;
    question_type: { label: string; value: string };
  }>;
  experience_range: string | { label: string; value: string };

  access_to: Array<{ label: string; value: string }>;
  ctc_range?: {
    ctc_min: string;
    ctc_max: string;
    currency: {
      country: string;
      unit: string;
    };
  };
  job_location?: Array<{
    country: { label: string; value: string };
    state: { label: string; value: string };
    city: { label: string; value: string };
  }>;
  notice_period?: number;
  should_ask_fitment_questions: boolean;
  language_code?: { label: string; value: string } | string;
  flow_type?: { label: string; value: string } | string;
  should_terminate_on_fitment_fail: boolean;
}

export interface CreateJobInterface {
  department: string;
  job_title: string;
  job_description: string;
  job_primary_technologies: Array<{ label: string; value: string }>;
  job_secondary_technologies: Array<{ label: string; value: string }>;
  sector_name: { label: string; value: string };
  should_record_video: boolean;
  n_questions: number;
  notice_period?: number;
  should_ask_followup: boolean;
  n_followup_questions: number;
  should_virtual_interviewer_call: boolean;
  intro_message: string;
  role_description: string;
  email_subject: string;
  email_body: string;
  should_ask_default_questions: boolean;
  should_ask_fitment_questions: boolean;
  default_questions: Array<{
    question: string;
    question_type: { label: string; value: string };
  }>;
  fitment_questions: Array<{
    question: string;
    question_type: { label: string; value: string };
  }>;
  job_location: Array<{
    country: { label: string; value: string };
    state: { label: string; value: string };
    city: { label: string; value: string };
  }>;
  experience_range: { label: string; value: string };
  job_type?: { label: string; value: string } | string;
  access_to: Array<{ label: string; value: string }>;
  country?: { label: string; value: string };
  state?: { label: string; value: string };
  city?: {
    label: string;
    value: string;
    city_name?: string;
    state_name?: string;
    country_name?: string;
  }[];
  ctc_min: string;
  ctc_max: string;
  currency: { label: string; value: string };
  language_code?: { label: string; value: string } | string;
  flow_type?: { label: string; value: string } | string;
}

export interface JobPrimaryTechnologies {
  additionalProp1: string;
  additionalProp2: string;
  additionalProp3: string;
}

export interface JobSocondaryTechnologies {
  additionalProp1: string;
  additionalProp2: string;
  additionalProp3: string;
}

interface StringObject {
  [key: string]: string;
}

export interface QueryInterface {
  string?: string;
}

type JobPostingField = {
  value: string | number | boolean | null;
  label: string;
  type: string; // Assuming TYPE_TEXT, TYPE_NUMBER, TYPE_CHECKBOX are string constants
  placeholder: string;
  name?: string; // Optional property
};

export type JobPostingFields = {
  [key: string]: JobPostingField;
};

export interface JobInterface extends CreateJobInterface {
  id: number;
  job_token: string;
  posting_created_at: Date;
  posting_updated_at: Date;
  is_active: boolean;
  candidate_count: number;
  // job_location?: {
  //   country: { value: string; label: string };
  //   state: { value: string; label: string };
  //   city: { value: string; label: string };
  // };
  ctc_range?: {
    ctc_min: string;
    ctc_max: string;
    currency: {
      country: string;
      unit: string;
    };
  };
}

export interface PaginatedJobPostingList {
  count: number;
  next?: string;
  previous?: string;
  results: JobInterface[];
}

export interface JobCandidateIdType {
  jid: number;
  cid: number;
}

export interface CandidateSkillInterface {
  label: string;
  value: string | number;
  valueStyle?: string;
  style?: any;
}

export interface CandidateDetailInterface {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  profile: string;
  experience: string;
  profile_created_at: string;
  selection_status: string;
  interview_status: string;
  task_id: string;
}

export interface PaginationQueryInterface {
  id: number;
  query: string | undefined;
}

export interface ModalPropsInterface {
  isOpen: boolean;
  onClose: VoidFunction;
  handler?: VoidFunction;
}

export interface CustomModalPropsInterface extends ModalPropsInterface {
  customMessage?: boolean;
}

export interface TextAreaDefaultValuesInterface {
  email_body: string;
  intro_message: string;
  job_description: string;
  role_description: string;
}

export type LocationType = {
  value: string;
  label: string;
  country_iso_code?: string;
  state_iso_code?: string;
  city_name?: string;
  country_name?: string;
  state_name?: string;
  latitude?: string;
  longitude?: string;
};

export type UserLocation = {
  ip: string;
  network: string;
  version: string;
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_name: string;
  country_code: string;
  country_code_iso3: string;
  country_capital: string;
  country_tld: string;
  continent_code: string;
  in_eu: boolean;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  country_area: number;
  country_population: number;
  asn: string;
  org: string;
};

// addressAutoComplete

export interface AddressAutoCompleteType {
  datasource?: Datasource;
  country?: string;
  country_code?: string;
  lon?: number;
  lat?: number;
  name?: string;
  result_type?: string;
  formatted?: string;
  address_line1?: string;
  address_line2?: string;
  category?: string;
  timezone?: Timezone;
  plus_code?: string;
  rank?: Rank;
  place_id?: string;
  state?: string;
  state_district?: string;
  county?: string;
  state_code?: string;
  city?: string;
  village?: string;
  district?: string;
  suburb?: string;
}

export interface Datasource {
  sourcename: string;
  attribution: string;
  license: string;
  url: string;
}

export interface Timezone {
  name: string;
  offset_STD: string;
  offset_STD_seconds: number;
  offset_DST: string;
  offset_DST_seconds: number;
  abbreviation_STD?: string;
  abbreviation_DST?: string;
}

export interface Rank {
  importance: number;
  confidence: number;
  match_type: string;
  confidence_city_level?: number;
}

// ip location interface

export interface CurrentLocationResponseType {
  city: City;
  continent: Continent;
  country: Country;
  location: Location;
  subdivisions: Subdivision[];
  state: State;
  datasource: Datasource[];
  ip: string;
}

export interface City {
  name: string;
  names: Names;
}

export interface Names {
  en: string;
}

export interface Continent {
  code: string;
  geoname_id: number;
  names: Names2;
  name: string;
}

export interface Names2 {
  de: string;
  en: string;
  es: string;
  fa: string;
  fr: string;
  ja: string;
  ko: string;
  "pt-BR": string;
  ru: string;
  "zh-CN": string;
}

export interface Country {
  geoname_id: number;
  iso_code: string;
  names: Names3;
  name: string;
  name_native: string;
  phone_code: string;
  capital: string;
  currency: string;
  flag: string;
  languages: Language[];
}

export interface Names3 {
  de: string;
  en: string;
  es: string;
  fa: string;
  fr: string;
  ja: string;
  ko: string;
  "pt-BR": string;
  ru: string;
  "zh-CN": string;
}

export interface Language {
  iso_code: string;
  name: string;
  name_native: string;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Subdivision {
  names: Names4;
}

export interface Names4 {
  en: string;
}

export interface State {
  name: string;
}

export interface Datasource {
  name: string;
  attribution: string;
  license: string;
}

export interface IP_API_INTERFACE {
  ip: string;
  network: string;
  version: string;
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_name: string;
  country_code: string;
  country_code_iso3: string;
  country_capital: string;
  country_tld: string;
  continent_code: string;
  in_eu: boolean;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  country_area: number;
  country_population: number;
  asn: string;
  org: string;
}
