import { Router } from "express";
import verifyBodyRequest from "../Middlewares/verifyBodyRequest.middleware";
import veryfiToken from "../Middlewares/veryfiToken";
import verifyIdUserParamn from "../Middlewares/verifyIdUserParamn.middleware";
import verifyEmailUser from "../Middlewares/veryfiEmailUser";
import verifyPhoneNumberUser from "../Middlewares/veryfiPhoneNumberUser";
import {
  deleteProfileController,
  listProfilebyIdController,
  updateProfileController,
} from "../Controllers/profile.controllers";
import { updateUserSchema } from "../Schemas/users.schemas";

const profileRoutes: Router = Router();

profileRoutes.get(
  "",
  veryfiToken,
  verifyIdUserParamn,
  listProfilebyIdController
);

profileRoutes.patch(
  "",
  veryfiToken,
  verifyIdUserParamn,
  verifyEmailUser,
  verifyPhoneNumberUser,
  verifyBodyRequest(updateUserSchema),
  updateProfileController
);

profileRoutes.delete(
  "",
  veryfiToken,
  verifyIdUserParamn,
  deleteProfileController
);

export default profileRoutes;
