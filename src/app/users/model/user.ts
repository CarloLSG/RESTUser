export class User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  gender: string;
  username: string;
  phone: string;
  picture: {
    large: string;
  }

  constructor(){
    this.name = {
      first: '',
      last: ''
    };
    this.email = '';
    this.gender = '';
    this.username = '';
    this.phone = '';
    this.picture = {
      large: ''
    };
  }
}
