export class RegisterInputModel {
  constructor(
    public email : string,
    public firstName: string,
    public lastName: string,
    public type: boolean,
    public password : string,
    public repeatedPassword: string
  ) { } 
}