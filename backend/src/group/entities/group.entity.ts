import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VirtualColumn,
  type Relation,
} from 'typeorm';
import { User } from '../../users/entities/users.entity.js';
import { GroupMember } from '../../group_members/entities/group_member.entity.js';

@Entity('groups')
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar', nullable: true })
  imageUrl: string;

  @Column({ type: 'integer' })
  ownerId: number;

  @Column({ type: 'varchar', length: 500, nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @VirtualColumn({
    query: (alias) =>
      `(SELECT COUNT(*) FROM group_members gm WHERE gm."groupId" = ${alias}.id)`,
  })
  memberCount: number;

  @ManyToOne(() => User, (user) => user.CreatedGroups)
  @JoinColumn({ name: 'ownerId' })
  Owner: Relation<User>;

  @OneToMany(() => GroupMember, (gp) => gp.Group)
  GroupMembers: Relation<GroupMember[]>;
}
