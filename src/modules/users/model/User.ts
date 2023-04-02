import { v4 as uuid } from "uuid";

class User {
  // Complete aqui
  
    id: string;
  
    name: string;
  
    admin: boolean;
  
    email: string;
  
    created_at: Date;
  
    updated_at: Date;

    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    
      if (!this.created_at) {
        this.created_at = new Date();
      } 

      this.updated_at = new Date();
      this.admin = false;
           
    }
}

export { User };
