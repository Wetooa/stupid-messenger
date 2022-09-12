import StatusCodes from "http-status-codes";

const sendMessage = async (req: any, res: any): Promise<void> => {
  const { convo: convoID } = req.params;
  console.log(req.user);

  res
    .status(StatusCodes.CREATED)
    .json({ msg: `messege sent at convo ${convoID}` });
};

const getMessages = async (req: any, res: any): Promise<void> => {
  const { convo: convoID } = req.params;
  res.status(StatusCodes.OK).json({ msg: "sent message" });
};

const deleteMessage = async (req: any, res: any): Promise<void> => {
  res.status(StatusCodes.OK).json({ msg: "sent message" });
};

const editMessage = async (req: any, res: any): Promise<void> => {
  res.status(StatusCodes.OK).json({ msg: "sent message" });
};

export default { sendMessage, getMessages, deleteMessage, editMessage };
