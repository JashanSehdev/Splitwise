import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  type Relation,
} from 'typeorm';
import { User } from '../../users/entities/users.entity.js';
import { GroupMember } from '../../group_members/entities/group_member.entity.js';

@Entity('groups')
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' , nullable : true})
  imageUrl: string;

  @Column({ type: 'integer' })
  ownerId: number;

  @Column({ type: 'varchar', length : 500 })
  description: string;

  @Column({ type: 'integer', default: 0 })
  totalExpenditure: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.CreatedGroups)
  @JoinColumn({ name: 'ownerId' })
  Owner: Relation<User>;

  @OneToMany(() => GroupMember, (gp) => gp.Group)
  GroupMembers : Relation<GroupMember[]>
}
