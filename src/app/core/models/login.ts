export class LoginClass implements ILogin{
  constructor(
    public id?: number,
    public email?: string,
    public password?: string,
  ) { }
}

export interface ILogin{
  id?: number,
  email?: string,
  password?: string,
}
