import { MigrationInterface, QueryRunner } from "typeorm";

export class AddOnDeletefields1690500132179 implements MigrationInterface {
    name = 'AddOnDeletefields1690500132179'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "fullName"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "fullName" character varying(50) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "fullName"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "fullName" character varying(60) NOT NULL`);
    }

}
