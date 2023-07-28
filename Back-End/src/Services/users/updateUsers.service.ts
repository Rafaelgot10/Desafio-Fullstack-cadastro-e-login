import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import {
  TUser,
  TUserRequest,
  TUserResponse,
} from "../../Interfaces/users.interfaces";
import User from "../../Entities/users.entities";
import { userSchema } from "../../Schemas/users.schemas";

const updateUserService = async (
  userId: number,
  userData: TUserRequest
): Promise<TUser> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData: User | null = await userRepository.findOneBy({
    id: userId,
  });

  const newUserData = userRepository.create({
    ...oldUserData,
    ...userData,
  });

  await userRepository.save(newUserData);

  const returnUser: TUser = userSchema.parse(newUserData);

  return returnUser;
};

export default updateUserService;
