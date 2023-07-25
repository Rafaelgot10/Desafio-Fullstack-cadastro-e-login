import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./users.entities";

@Entity("contact")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  fullName: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "int", unique: true })
  phone: number;

  @CreateDateColumn({ type: "date" })
  createdAt?: Date | string;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: string | Date | null | undefined;

  @ManyToOne(() => User, (user) => user.contact)
  user: User;
}

export default Contact;
