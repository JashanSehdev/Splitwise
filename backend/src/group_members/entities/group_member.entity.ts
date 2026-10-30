import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, type Relation, UpdateDateColumn } from 'typeorm';
import { RequestEnum } from '../enum/request.enum.js';
import { Group } from '../../group/entities/group.entity.js';
import { group } from 'console';
import { User } from '../../users/entities/users.entity.js';

@Entity('group_members')
export class GroupMember {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer' })
  memberId: number;

  @Column({ type: 'integer' })
  groupId: number;

  @Column({type : 'enum',  enum : RequestEnum, default: RequestEnum.PENDING})
  request : RequestEnum

  @CreateDateColumn()
  createdAt : number

  @UpdateDateColumn()
  updatedAt : number

  @ManyToOne(() => Group, (group) => group.GroupMembers, { onDelete: 'CASCADE' })
  @JoinColumn({name : 'groupId'})
  Group : Relation<Group>

  @ManyToOne(() => User, (user) => user.CreatedGroups,  { onDelete: 'CASCADE' })
  Member : Relation<User>
  
}
