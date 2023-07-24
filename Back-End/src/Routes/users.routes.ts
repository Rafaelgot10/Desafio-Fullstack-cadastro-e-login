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
import verifyEmailUser from "../Middlewares/veryfiEmailExists";
import veryfiToken from "../Middlewares/veryfiToken";
import verifyOwner from "../Middlewares/verifyOwner.middleware";
import verifyIdUserParamn from "../Middlewares/verifyIdUserParamn.middleware";

const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  verifyBodyRequest(requestUserSchema),
  verifyEmailUser,
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
  verifyIdUserParamn,
  veryfiToken,
  verifyBodyRequest(updateUserSchema),
  verifyOwner,
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
