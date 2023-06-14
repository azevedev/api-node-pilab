import { Knex } from 'knex';
import { TableNames } from '../Tables';


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(TableNames.school, table => {
        table.bigIncrements('id').primary().index();
        table.string('nome').index().notNullable();
        table.string('municipio').notNullable();
        table.string('uf').notNullable();
        table.decimal('ideb').defaultTo(0);
        table.float('latitude').nullable();
        table.float('longitude').nullable();
        table.integer('porte').defaultTo(0);

        table.comment('Tabela que armazena as escolas dos municípios');
    }).then(() => {
        console.log(`# Table ${TableNames.school} Created!`);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(TableNames.school).then(() => {
        console.log(`# Table ${TableNames.school} Dropped!`);
    });
}

