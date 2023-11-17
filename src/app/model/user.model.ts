import {Role} from "./role.enum";

export class User{
  id: number | undefined;
  userName: string = "";
  password: string = "";
  name: string = "";
  token : string = "";
  role: Role = Role.USER;

}
