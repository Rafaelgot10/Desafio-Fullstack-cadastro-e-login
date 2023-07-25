import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

import { getRounds, hashSync } from "bcryptjs";
import Contact from "./contacts.entities";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  fullName: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "int", unique: true })
  phone: number;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt?: Date | string;

  @UpdateDateColumn({ type: "date" })
  updatedAt?: Date | string;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: string | Date | null | undefined;

  @OneToMany(() => Contact, (contact) => contact.user)
  contact: Contact[];

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
