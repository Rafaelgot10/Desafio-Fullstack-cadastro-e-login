import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listAllUserController,
  listUserbyIdController,
  updateUserController,
} from "../Controllers/users.controllers";
import verifyBodyRequest from "../Middlewares/verifyBodyRequest.middleware";
import { requestUserSchema, updateUserSchema } from "../Schemas/users.schemas";
import veryfiToken from "../Middlewares/veryfiToken";
import verifyOwner from "../Middlewares/verifyOwner.middleware";
import verifyIdUserParamn from "../Middlewares/verifyIdUserParamn.middleware";
import verifyEmailUser from "../Middlewares/veryfiEmailUser";
import verifyPhoneNumberUser from "../Middlewares/veryfiPhoneNumberUser";

const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  verifyEmailUser,
  verifyPhoneNumberUser,
  verifyBodyRequest(requestUserSchema),
  createUserController
);

usersRoutes.get("", veryfiToken, listAllUserController);

usersRoutes.get(
  "/:id",
  verifyIdUserParamn,
  veryfiToken,
  verifyOwner,
  listUserbyIdController
);

usersRoutes.patch(
  "/:id",
  veryfiToken,
  verifyIdUserParamn,
  verifyEmailUser,
  verifyOwner,
  verifyPhoneNumberUser,
  verifyBodyRequest(updateUserSchema),
  updateUserController
);

usersRoutes.delete(
  "/:id",
  verifyIdUserParamn,
  veryfiToken,
  verifyOwner,
  deleteUserController
);

export default usersRoutes;
