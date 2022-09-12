import StatusCodes from "http-status-codes";

const register = async (req: Request, res: any): Promise<void> => {
  res.status(StatusCodes.CREATED).json({ msg: "register success" });
};

const login = async (req: Request, res: any): Promise<void> => {
  res.status(StatusCodes.OK).json({ msg: "login success" });
};

export default { register, login };
