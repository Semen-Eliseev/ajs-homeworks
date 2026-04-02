export class ErrorRepository {
    constructor() {
        this.errors = new Map();
    };
    
  translate(code) {
    return this.errors.has(code) ? this.errors.get(code) : 'Unknown error';
  };

 
  add(code, message) {
    this.errors.set(code, String(message));
  };

  remove(code) {
    this.errors.delete(code);
  };

 
};