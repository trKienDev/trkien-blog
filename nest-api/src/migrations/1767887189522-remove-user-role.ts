import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveUserRole1767887189522 implements MigrationInterface {
    name = 'RemoveUserRole1767887189522'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "roles"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "roles" text array NOT NULL`);
    }

}
