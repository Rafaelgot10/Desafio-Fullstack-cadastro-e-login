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
import verifyEmailContact from "../Middlewares/veryfiEmailContact";
import verifyPhoneNumberContact from "../Middlewares/veryfiPhoneNumberContact";

const contactRouter = Router();

contactRouter.post(
  "",
  veryfiToken,
  verifyEmailContact,
  verifyPhoneNumberContact,
  verifyBodyRequest(requestContactSchema),
  createContactController
);

contactRouter.get("", veryfiToken, listAllContactsController);

contactRouter.get(
  "/:id",
  verifyIdContactParamn,
  veryfiToken,
  listContactbyIdController
);

contactRouter.patch(
  "/:id",
  verifyIdContactParamn,
  veryfiToken,
  verifyEmailContact,
  verifyPhoneNumberContact,
  verifyBodyRequest(updateContactSchema),
  updateContactController
);

contactRouter.delete(
  "/:id",
  verifyIdContactParamn,
  veryfiToken,
  deleteContactController
);

export default contactRouter;
