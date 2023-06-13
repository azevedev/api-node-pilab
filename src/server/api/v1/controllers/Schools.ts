import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { objForEach } from '../../shared/services';

// TODO: Criar Model para guardar essas definições
// Gerando 'Model' para Escolas.
interface School {
    codigo_uf: string,
    municipio: string,
    localizacao: number,
}

const ok = (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).json({status: 'ok'});
};


const get = (req: Request<{}, {}, School>, res: Response) => {
    const filter = req.query.filter;
    const sort = req.query.sort;
    const columns = req.query.columns;
    const page = req.query.page;
    const limit = req.query.limit;
    console.log(filter);
    console.log(sort);
    console.log(columns);
    console.log(page);
    console.log(limit);
    console.log('Filters: ');
    objForEach(filter, (k, v) => {
        console.log('key', k, 'value', v);
    });

    console.log('Sorts: ');
    objForEach(sort, (_, v) => {
        console.log('values', (<string><unknown>v).split(','));
    });

    console.log('Columns: ');
    console.log((<string><unknown>columns).split(','));

    return res.status(StatusCodes.OK).json(req.params);
};


export const SchoolsController = {
    ok,
    get
};