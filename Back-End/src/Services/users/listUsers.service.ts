import { Repository } from "typeorm";
import { TUsersResponse } from "../../Interfaces/users.interfaces";
import User from "../../Entities/users.entities";
import { responseUsersSchema } from "../../Schemas/users.schemas";
import { AppDataSource } from "../../data-source";

const listAllUsersService = async (): Promise<TUsersResponse | null> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const users: User[] | null = await userRepository.find({
    relations: {
      contacts: true,
    },
  });

  const returnUsers: TUsersResponse = responseUsersSchema.parse(users);

  return returnUsers;
};

export default listAllUsersService;
