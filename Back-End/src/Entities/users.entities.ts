import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";

import { getRounds, hashSync } from "bcryptjs";
import Contact from "./contacts.entities";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 50 })
  fullName: string;

  @Column({ type: "varchar", length: 50, unique: true })
  email: string;

  @Column({ type: "varchar", unique: true })
  phone: string;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt?: Date | string;

  @OneToMany(() => Contact, (contact) => contact.user, { nullable: true })
  contacts: Contact[] | null | undefined;

  @BeforeInsert()
  @BeforeUpdate()
  hash() {
    const newPassword = getRounds(this.password);
    if (!newPassword) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export default User;
