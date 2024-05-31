
export class ExpressAuthException extends Error {
    message: string;
    constructor(message:string) {
        super(message)
        this.message = message;
    }
}

export class ExpressAuthImplementationException extends ExpressAuthException {
    constructor(message:string) {
        super(message)
    }
}



class HttpException extends Error {
    status:number;
    message:string;
    constructor(status:number, message:string) {
      super(message);
      this.status = status;
      this.message = message;
    }
  }
  
  
export class UnauthorizedException extends HttpException {

    constructor(message = 'Unauthorized') {
        super(401, message);
    }
}

