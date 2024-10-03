export interface IProjects {
  id: string;
  title?: string;
  image?: string;
  link?: string;
  repositoryUrl?: string;
  description?: string;
  collaborator?: {
    name: string;
    instagram?: string;
  };
  technologies?: string;
  scrollTime: string;
}
