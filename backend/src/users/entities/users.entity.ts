import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, type Relation, UpdateDateColumn } from "typeorm";
import { Role } from "../enum/roles.enum.js";
import { Group } from "../../group/entities/group.entity.js";
import { GroupMember } from "../../group_members/entities/group_member.entity.js";

@Entity('users')

export class User {
    
    @PrimaryGeneratedColumn()
    id : number

    @Column({type : 'varchar', length : 120})
    username : string

    @Column({type : 'varchar' ,length : 120, unique: true})
    email : string

    @Column({type: 'varchar', length : 120, nullable : true})
    password : string

    @Column({type : 'enum', enum : Role, default : Role.UNDEFINED})
    role : Role

    @Column({type : 'varchar', length: 255, unique:true, nullable: true})
    googleId : string

    @CreateDateColumn()
    createdAt : Date

    @UpdateDateColumn()
    updatedAt : Date

    @OneToMany(() => Group , (group) => group.Owner)
    CreatedGroups : Relation<Group>

    @OneToMany(()=>GroupMember, (gm) => gm.Member )
    Groups : Relation<GroupMember[]>

}