export interface ToDo {
  task: string;
  id: number | string;
  status: 'pending' | 'completed';
}
