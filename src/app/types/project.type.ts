export interface ProjectDescription {
  name: string;
  projectManager: string;
  domain: string;
  teamLead: string;
  mainTechnology: string;
  additionalTechnologies: string[];
  description: string;
  teamMembers: TeamMember[];
}

export interface TeamMember {
  id: string;
  profileImagePath: string;
  fullName: string;
}
