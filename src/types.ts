export interface Experience {
  company: string;
  location: string;
  roles: Role[];
  totalDuration?: string;
}

export interface Role {
  title: string;
  period: string;
  duration?: string;
  description?: string;
  highlights?: string[];
  location?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer?: string;
  period?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  credentials: string;
  location: string;
  summary: string[];
  skills: string[];
  certifications: Certification[];
  awards: string[];
  experience: Experience[];
  education: Education[];
  contact: {
    linkedin: string;
    website: string;
  };
}
