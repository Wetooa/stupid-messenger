import StatusCodes from "http-status-codes";

const notFound = (req: Request, res: any) => {
  res.status(StatusCodes.NOT_FOUND).send("Route does not exist");
};

module.exports = notFound;
