import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Intex } from "./Intex";

@Entity("users", { schema: "ognjanovrs_intexbd" })
export class Users {
  @PrimaryGeneratedColumn({ type: "int", name: "userID", unsigned: true })
  userId: number;

  @Column("varchar", { name: "username", length: 50, default: () => "'0'" })
  username: string;

  @Column("varchar", { name: "password", length: 50 })
  password: string;

  @Column("varchar", { name: "name", length: 50, default: () => "'0'" })
  name: string;

  @Column("varchar", { name: "surname", length: 50, default: () => "'0'" })
  surname: string;

  @Column("enum", { name: "type", enum: ["A", "U"] })
  type: "A" | "U";

  @Column("varchar", { name: "segment", length: 20 })
  segment: string;

  @Column("varchar", { name: "mobilenumber", nullable: true, length: 20 })
  mobilenumber: string | null;

  @OneToMany(() => Intex, (intex) => intex.user)
  intexes: Intex[];
}
