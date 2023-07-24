import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TUserResponse } from "../../Interfaces/users.interfaces";
import User from "../../Entities/users.entities";
import { responseUserSchema } from "../../Schemas/users.schemas";

const listUserByIdService = async (
  UserId: number
): Promise<TUserResponse | null> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: UserId,
    },

    // relations: {
    //   realEstate: true,
    // },
  });

  const returnUser: TUserResponse = responseUserSchema.parse(user);

  return returnUser;
};

export default listUserByIdService;
