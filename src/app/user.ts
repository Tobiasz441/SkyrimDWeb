export class User{
  constructor(
    public id: string,
    public username: string,
    public photo: Uint32Array,
    public location: string,
    public birthday: Date,
    public description: string,
    public gender: string,
    public password: string
  ) {
  }
}
