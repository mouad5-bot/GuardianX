export class RegisterClass implements IRegister{
  constructor(
    public id?: number,
    public firstName?: string,
    public lastName?: string,
    public email?: string,
    public password?: string,
  ) { }
}

export interface IRegister{
   id?: number,
   firstName?: string,
   lastName?: string,
   email?: string,
   password?: string,
}
