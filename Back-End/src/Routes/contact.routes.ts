import { Router } from "express";
import verifyBodyRequest from "../Middlewares/verifyBodyRequest.middleware";
import {
  requestContactSchema,
  updateContactSchema,
} from "../Schemas/contact.schemas";
import {
  createContactController,
  deleteContactController,
  listAllContactsController,
  listContactbyIdController,
  updateContactController,
} from "../Controllers/contact.controllers";
import veryfiToken from "../Middlewares/veryfiToken";
import verifyIdContactParamn from "../Middlewares/verifyIdContactParamn.middleware";
// import loginController from "../Controllers/login.controllers";

const contactRouter = Router();

contactRouter.post(
  "",
  verifyBodyRequest(requestContactSchema),
  createContactController
);

contactRouter.get("", veryfiToken, listAllContactsController);

contactRouter.get(
  "/:id",
  verifyIdContactParamn,
  veryfiToken,
  // verifyOwner,
  listContactbyIdController
);

contactRouter.patch(
  "/:id",
  verifyIdContactParamn,
  veryfiToken,
  verifyBodyRequest(updateContactSchema),
  // verifyOwner,
  updateContactController
);

contactRouter.delete(
  "/:id",
  verifyIdContactParamn,
  veryfiToken,
  // verifyOwner,
  deleteContactController
);

export default contactRouter;
