import { IsEmail, IsNotEmpty } from "class-validator";
export class LogiDto{
  @IsEmail()
  email?: string;
  @IsNotEmpty()
  password?: string;
}