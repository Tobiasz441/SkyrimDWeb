export interface User {
  id: string;
  username: string;
  location: string;
  birthday: Date;
  description: string;
  gender: string;
  password: string;
  photo?: number[];

}

export class User {

  constructor(
    public id: string,
    public username: string,
    public location: string,
    public birthday: Date,
    public description: string,
    public gender: string,
    public password: string,
    public photo?: number[]) {
  }
}
