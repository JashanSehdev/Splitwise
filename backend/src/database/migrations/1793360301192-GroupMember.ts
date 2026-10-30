import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class GroupMember1793360301192 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name : 'group_members',
            columns : [
                {
                    name : 'id',
                    type : 'integer',
                    isPrimary : true,
                    isGenerated : true
                },
                {
                    name : 'groupId',
                    type : 'integer'
                },
                {
                    name : 'memberId',
                    type : 'integer'
                },
                {
                    name : 'request',
                    type : 'enum',
                    enum : ['pending', 'accepted'],
                    default : "'pending'"
                },
                {
                    name : 'createdAt',
                    type : 'timestamp',
                    default : 'now()',
                },
                {
                    name : 'updatedAt',
                    type : 'timestamp',
                    default : 'now()',
                }
            ],

            foreignKeys : [
                {
                    name : 'fk_groupMember_group',
                    columnNames : ['groupId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'groups',
                    onDelete: 'CASCADE'
                },
                {
                    name : 'fk_groupMember_user',
                    columnNames : ['memberId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'users',
                    onDelete: 'CASCADE'
                }
            ]
        })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('group_members', 'fk_groupMember_group')
        await queryRunner.dropForeignKey('group_members', 'fk_groupMember_user')

        await queryRunner.dropTable('group_members')
    }

}
