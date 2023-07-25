import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TUser, TUserRequest } from "../../Interfaces/users.interfaces";
import User from "../../Entities/users.entities";
import { userSchema } from "../../Schemas/users.schemas";

const createUserService = async (userData: TUserRequest): Promise<TUser> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(userData);

  await userRepository.save(user);

  const returnUser = userSchema.parse(user);

  return returnUser;
};

export default createUserService;
