export class User{
  constructor(
    public id: string,
    public username: string,
    public photo: number[],
    public location: string,
    public birthday: Date,
    public description: string,
    public gender: string,
    public password: string
  ) { }

}
