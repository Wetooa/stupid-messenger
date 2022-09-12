const { StatusCodes } = require("http-status-codes");

interface Err extends Error {
  statusCode: number;
  message: string;
}

const errorHandler = (err: Err, req: any, res: any, next: any) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong try again later",
  };

  return res.status(customError.statusCode).json({ msg: customError.msg });
};

export default errorHandler;
