import { School } from '../../models';

declare module 'knex/types/tables' {
    interface Tables {
        school: School
    }
}