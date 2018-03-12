export interface IloginFrm {
  email:string;
  pass:string;
}

export interface Iusr {
  id:number;
  name:string;
  surname1:string;
  surname2:string;
  role:string;
}

export interface Icard {
  id:number;
  title:string;
  date:Date;
  body:string;
}