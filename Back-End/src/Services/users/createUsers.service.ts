import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TUserRequest, TUserResponse } from "../../Interfaces/users.interfaces";
import User from "../../Entities/users.entities";
import { responseUserSchema } from "../../Schemas/users.schemas";

const createUserService = async (
  userData: TUserRequest
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(userData);

  await userRepository.save(user);

  const returnUser = responseUserSchema.parse(user);

  return returnUser;
};

export default createUserService;
