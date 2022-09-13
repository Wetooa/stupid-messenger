import StatusCodes from "http-status-codes";
const User = require("../models/User");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req: any, res: any): Promise<void> => {
  const { password, password2 } = req.body;
  if (password !== password2) {
    throw new BadRequestError("Password's do not match!");
  }
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    msg: "Successfully Registered!",
    user: { name: user.username, email: user.email },
    token,
  });
};

const login = async (req: any, res: any): Promise<void> => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  const token = user.createJWT();
  res
    .status(StatusCodes.OK)
    .json({ user: { username: user.username, email: user.email }, token });
};

export default { register, login };
