import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Project } from "./Project";
import { Reply } from "./Reply";
import { Snippet } from "./Snippet";

@Entity()
export class Thread extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  message: string;

  @Column({ nullable: true})
  userId: number;

  @ManyToOne(() => User, (user) => user.threads)
  @JoinColumn({ name: "userId" })
  user: Promise<User>;

  @Column({ nullable: true})
  projectId: number;

  @OneToMany(() => Snippet, (s) => s.thread)
  snippets: Promise<Snippet[]>;

  @ManyToOne(() => Project, (project) => project.threads)
  @JoinColumn({ name: "projectId" })
  project: Promise<Project>;

  @OneToMany(() => Reply, (reply) => reply.thread)
  replies: Promise<Reply[]>;
}
