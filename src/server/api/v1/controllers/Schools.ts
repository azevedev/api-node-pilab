import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { objForEach } from '../../shared/services';
import { Knex } from '../../database/knex';
import { School } from '../../database/models';

const SchoolColumns = [
    'id',
    'nome',
    'municipio',
    'uf',
    'ideb',
    'latitude',
    'longitude',
    'porte',
];

enum EOperations {
    'in' = 'in',
    'not' = '<>',
    'gt' = '>',
    'gte' = '>=',
    'lt' = '<',
    'lte' = '<=',
    'like' = 'like'
}

const ok = (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).json({status: 'ok'});
};

const get = async (req: Request<{}, {}, School>, res: Response) => {
    const filter = req.query.filter;
    const sort = req.query.sort;
    const columns = req.query.columns;
    const page = <number><unknown>req.query.page || 1;
    const limit = <number><unknown>req.query.limit || <number><unknown>req.query.per_page || 15;
    const offset = (page - 1) * limit;
    const requestedFilters: any[] = [];
    objForEach(filter, (column: string, value: string | Object) => {
        if(SchoolColumns.includes(column)){
            switch(typeof value){
            case 'string':
                // EQUALS TO
                requestedFilters.push({
                    'column':column,
                    'operation': '=',
                    'value': value,
                });
                break;
            case 'object':
                // NOT, IN, GT, GTE, LT, LTE
                (Object.keys(value) as (keyof typeof value)[]).forEach( key => {
                    let result;
                    if(key.toString() === 'like') result = <string>('%' + value[key] + '%');
                    else result = value[key];
                    requestedFilters.push({
                        'column':column,
                        'operation': EOperations[key],
                        'value': result,
                    });
                });
                break;
            default:
                break;
            }
        }
    });

    const requestedQuerySorts: any[] = [];
    objForEach(sort, (_, v) => {
        const row = (<string><unknown>v).split(',');
        const column = row[0];
        let order = row[1];
        if(order == undefined || (order != 'asc' && order != 'desc')) order = 'asc';
        if(column != undefined && SchoolColumns.includes(column)) {
            const obj = {
                column: column,
                order: order
            };
            requestedQuerySorts.push(obj);
        }
    });
    const requestedSorts: Readonly<{column: string, order: string}>[] = requestedQuerySorts;

    let requestedQueryColumns: string[] = [];
    if(columns != undefined) requestedQueryColumns = (<string><unknown>columns).split(',').filter((element) => {
        return SchoolColumns.includes(element);
    });

    const requestedColumns: string[] = requestedQueryColumns;
    if(requestedColumns.length == 0) requestedColumns.push('*');
    const result = await Knex('school')
        .select(requestedColumns)
        .where((builder) => {
            requestedFilters.forEach(row => {
                builder.where(row.column, row.operation, row.value);
            });
        }).orderBy(requestedSorts)
        .offset(offset)
        .limit(limit);

    return res.status(StatusCodes.OK).json(result);
};


export const SchoolsController = {
    ok,
    get
};