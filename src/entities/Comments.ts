import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("comments", { schema: "ognjanovrs_intexbd" })
export class Comments {
  @PrimaryGeneratedColumn({ type: "int", name: "commentID", unsigned: true })
  commentId: number;

  @Column("int", { name: "intexID", unsigned: true, default: () => "'0'" })
  intexId: number;

  @Column("int", { name: "userID", unsigned: true, default: () => "'0'" })
  userId: number;

  @Column("varchar", { name: "text", length: 255 })
  text: string;

  @Column("timestamp", {
    name: "time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  time: Date | null;

  @Column("int", { name: "notificationNeeded", default: () => "'1'" })
  notificationNeeded: number;
}
