import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Intex } from "./Intex";

@Entity("machines", { schema: "ognjanovrs_intexbd" })
export class Machines {
  @PrimaryGeneratedColumn({ type: "int", name: "machineID", unsigned: true })
  machineId: number;

  @Column("varchar", { name: "name", length: 100 })
  name: string;

  @Column("varchar", { name: "segment", length: 50 })
  segment: string;

  @OneToMany(() => Intex, (intex) => intex.machine)
  intexes: Intex[];
}
