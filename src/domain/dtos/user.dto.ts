export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  roleId: string;
}

export interface UpdateUserDTO {
  name: string;
}
