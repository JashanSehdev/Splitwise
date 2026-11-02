import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class GroupSchema1793339764564 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name : 'groups',
                columns : [
                    {
                        name : 'id',
                        type : 'integer',
                        isPrimary : true,
                        isGenerated : true
                    },
                    {
                        name : 'title',
                        type : 'varchar',

                    },
                    {
                        name : 'imageUrl',
                        type : 'varchar',
                        isNullable : true
                    },
                    {
                        name : 'description',
                        type : 'varchar',
                        isNullable : true
                    },
                    {
                        name : 'ownerId',
                        type : 'integer',
                    },
                    {
                        name : 'createdAt',
                        type : 'timestamp',
                        default: 'now()', 
                    },
                    {
                        name : 'updatedAt',
                        type : 'timestamp',
                        default: 'now()', 
                    }
                ],

                foreignKeys : [
                    new TableForeignKey ({
                        name : 'fk_group_owner',
                        columnNames : ['ownerId'],
                        referencedColumnNames : ['id'],
                        referencedTableName : 'users'
                    })
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('groups', 'fk_group_owner')
        await queryRunner.dropTable('groups')
    }

}
