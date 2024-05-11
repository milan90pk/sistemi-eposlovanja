import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Machines } from "./Machines";
import { Users } from "./Users";

@Index("machineID", ["machineId"], {})
@Index("creatorID", ["userId"], {})
@Entity("intex", { schema: "ognjanovrs_intexbd" })
export class Intex {
  @PrimaryGeneratedColumn({ type: "int", name: "intexID", unsigned: true })
  intexId: number;

  @Column("int", { name: "machineID", unsigned: true })
  machineId: number;

  @Column("int", { name: "userID", unsigned: true })
  userId: number;

  @Column("varchar", { name: "status", length: 20, default: () => "'Open'" })
  status: string;

  @Column("timestamp", { name: "created", default: () => "CURRENT_TIMESTAMP" })
  created: Date;

  @Column("enum", { name: "stopped", enum: ["Da", "Ne"] })
  stopped: "Da" | "Ne";

  @Column("varchar", { name: "description", length: 255 })
  description: string;

  @Column("varchar", { name: "segment", length: 20 })
  segment: string;

  @ManyToOne(() => Machines, (machines) => machines.intexes, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "machineID", referencedColumnName: "machineId" }])
  machine: Machines;

  @ManyToOne(() => Users, (users) => users.intexes, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "userID", referencedColumnName: "userId" }])
  user: Users;
}
