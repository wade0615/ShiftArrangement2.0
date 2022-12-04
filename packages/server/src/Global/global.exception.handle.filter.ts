import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { STATE_CODE } from 'src/Enum/state.code.enum';

@Catch()
export default class GlobalExceptionHandleFilter implements ExceptionFilter {
  catch(exception, host: ArgumentsHost) {
    const isCust = exception instanceof CustomerException;
    const isHttp = exception instanceof HttpException;

    if (isCust) {
      customerErrorProcess(exception, host);
    } else if (isHttp) {
      httpErrorProcess(exception, host);
    } else {
      ErrorProcess(exception, host);
    }
  }
}

const httpErrorProcess = (exception: HttpException, host: ArgumentsHost) => {
  const ctx = host.switchToHttp();
  const resp = ctx.getResponse();
  const req = ctx.getRequest();
  const status = exception.getStatus();
  const message = exception.message;
  // const now = Date.now();
  // http error just log message

  resp.status(status).json({
    statusCode: STATE_CODE.UNEXPECTED,
    timestamp: new Date().toISOString(),
    path: req.url,
    result: {
      msg: message,
    },
  });
};

const customerErrorProcess = (exception, host: ArgumentsHost) => {
  const ctx = host.switchToHttp();
  const resp = ctx.getResponse();
  const req = ctx.getRequest();
  const status = exception.getStatus();

  resp.status(status).json({
    statusCode: exception.getErrorCode(),
    timestamp: new Date().toISOString(),
    path: req.url,
    result: exception.getErrorMessage(),
  });
};

const ErrorProcess = (exception, host: ArgumentsHost) => {
  const ctx = host.switchToHttp();
  const response = ctx.getResponse<Response>();
  const req = ctx.getRequest();

  const { message } = exception;

  const status = HttpStatus.BAD_REQUEST;
  response.status(status).json({
    statusCode: STATE_CODE.UNEXPECTED,
    timestamp: new Date().toISOString(),
    path: req.url,
    result: {
      msg: message,
    },
  });
};
export class CustomerException extends HttpException {
  private errorVaule;

  constructor(errorVaule, statusCode: HttpStatus) {
    super(errorVaule, statusCode);
    this.errorVaule = errorVaule;
  }

  getErrorCode(): number {
    return this.errorVaule.code;
  }

  getErrorMessage(): object {
    return { msg: this.errorVaule.msg };
  }
}
