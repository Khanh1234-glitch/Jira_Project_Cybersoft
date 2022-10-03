import { creator } from './Creater';
export interface AllProjectInterface {
  id: number;
  projectName: string;
  description: string;
  categoryId: number;
  categoryName: string;
  alias: string;
  deleted: boolean;
  creator:creator;
}
