export type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export interface UserRequestType {
  url: string;
  method: HttpMethod;
  body?: any;
  onSuccess: () => 
}
