import { testServer } from './../jest.setup';

describe('Schools Controller test suit.',() => {

    const get = (query = '') => {
        return testServer.get('/api/v1/escolas?' + query).send();
    };

    it('get all schools records', async () => {
        const res = await get();

        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(15);
    });

    it('get schools records with limit', async () => {
        const res = await get('per_page=5').send();
        const res2 = await get('per_page=20').send();
        const res3 = await get('per_page=2').send();


        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(5);

        expect(res2.statusCode).toEqual(200);
        expect(res2.body.length).toEqual(20);

        expect(res3.statusCode).toEqual(200);
        expect(res3.body.length).toEqual(2);
    });

    it('get schools records with pages', async () => {
        const res = await get('page=1').send();
        const res2 = await get('page=2').send();
        const res3 = await get('page=3').send();
        const res4 = await get('page=4').send();

        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(15);

        expect(res2.statusCode).toEqual(200);
        expect(res2.body.length).toEqual(15);

        expect(res3.statusCode).toEqual(200);
        expect(res3.body.length).toEqual(5);

        expect(res4.statusCode).toEqual(200);
        expect(res4.body.length).toEqual(0);
    });

    it('get schools records with a filter', async () => {
        const res = await get('filter[uf]=ma').send();
        const res1 = await get('filter[uf]=pi').send();

        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(1);

        expect(res1.statusCode).toEqual(200);
        expect(res1.body.length).toEqual(3);
    });

    it('get schools records using sort', async () => {
        const res = await get('sort[]=id,desc').send();

        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(15);
        expect(res.body[0].id).toEqual(35);
    });

    it('get schools records, only using specific columns', async () => {
        const res = await get('columns=id,uf').send();

        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(15);
        expect(Object.keys(res.body[0])).toEqual(['id', 'uf']);

        const res1 = await get('columns=uf,nome,porte').send();

        expect(res1.statusCode).toEqual(200);
        expect(res1.body.length).toEqual(15);
        expect(Object.keys(res1.body[0])).toEqual(['uf', 'nome', 'porte']);
    });

    it('get schools records with a filter and sort', async () => {
        const res = await get('filter[uf]=sp&sort[]=id,desc').send();

        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(1);
        expect(res.body[0].uf).toEqual('sp');
    });

    it('get schools records with a filter and columns exclusion', async () => {
        const res = await get('filter[uf]=ma&columns=id,uf,nome').send();

        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(1);
        expect(Object.keys(res.body[0])).toEqual(['id', 'uf', 'nome']);
    });

    it('get schools records using sort and columns exclusion', async () => {
        const res = await get('sort[]=ideb,asc&columns=id,ideb').send();

        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(15);
        expect(Object.keys(res.body[0])).toEqual(['id', 'ideb']);
    });

    it('get schools records using a filter, a sort type and excluding columns', async () => {
        const res = await get('filter[ideb][gte]=3.5&sort[]=ideb,asc&columns=id,ideb,municipio').send();

        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(10);
        expect(Object.keys(res.body[0])).toEqual(['id', 'ideb', 'municipio']);
        expect(res.body[0].ideb).toEqual(3.5);
    });

    it('get schools records using multiple filters', async () => {
        const res = await get('filter[ideb][gte]=3.5&filter[uf][in]=ma&filter[uf][in]=pi&filter[porte][lt]=10').send();

        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(4);
    });

    it('get schools records using invalid filters', async () => {
        const res = await get('filter[ideb][gxe]=3.5&filter[ux][in]=ma&filter[lf][in]=pi&filter[parte][lt]=10').send();

        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(15);
    });

    it('get schools records using invalid sorts', async () => {
        const res = await get('sort[]=gxe').send();
        const res1 = await get('sort[]=ma').send();
        const res2 = await get('sort[lf]=ida,desc').send();

        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(15);
        expect(res.body[0].id).toEqual(1);

        expect(res1.statusCode).toEqual(200);
        expect(res1.body.length).toEqual(15);
        expect(res1.body[0].id).toEqual(1);

        expect(res2.statusCode).toEqual(200);
        expect(res2.body.length).toEqual(15);
        expect(res2.body[0].id).toEqual(1);
    });
    
    it('get schools records using invalid columns', async () => {
        const modelToArray = [
            'id', 'nome', 'municipio', 'uf', 'ideb', 'latitude', 'longitude', 'porte'
        ];
        const res = await get('columns=gxe,lkf,pop,gg').send();
        const res1 = await get('columns=zz,kk,qq,ls').send();
        const res2 = await get('columns=idub,ufa,municpia,porta').send();

        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(15);

        expect(res1.statusCode).toEqual(200);
        expect(res1.body.length).toEqual(15);

        expect(res2.statusCode).toEqual(200);
        expect(res2.body.length).toEqual(15);

        expect(Object.keys(res.body[0])).toEqual(modelToArray);
        expect(Object.keys(res1.body[0])).toEqual(modelToArray);
        expect(Object.keys(res2.body[0])).toEqual(modelToArray);

    });

});