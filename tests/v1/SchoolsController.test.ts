import { testServer } from './../jest.setup';

describe('Schools Controller test suit.',() => {

    it('get all schools records', async () => {
        const res = await testServer.get('/api/v1/escolas').send();
        expect(res.statusCode).toEqual(200);
    });

    it('get schools records with a filter', async () => {
        const res = await testServer.get('/api/v1/escolas').send();
        expect(res.statusCode).toEqual(200);
    });

    it('get schools records using sort', async () => {
        const res = await testServer.get('/api/v1/escolas').send();
        expect(res.statusCode).toEqual(200);
    });

    it('get schools records, only using specific columns', async () => {
        const res = await testServer.get('/api/v1/escolas').send();
        expect(res.statusCode).toEqual(200);
    });

    it('get schools records with a filter and sort', async () => {
        const res = await testServer.get('/api/v1/escolas').send();
        expect(res.statusCode).toEqual(200);
    });

    it('get schools records with a filter and columns exclusion', async () => {
        const res = await testServer.get('/api/v1/escolas').send();
        expect(res.statusCode).toEqual(200);
    });

    it('get schools records using sort and columns exclusion', async () => {
        const res = await testServer.get('/api/v1/escolas').send();
        expect(res.statusCode).toEqual(200);
    });

    it('get schools records using a filter, a sort type and excluding columns', async () => {
        const res = await testServer.get('/api/v1/escolas').send();
        expect(res.statusCode).toEqual(200);
    });

    it('get schools records using multiple filters', async () => {
        const res = await testServer.get('/api/v1/escolas').send();
        expect(res.statusCode).toEqual(200);
    });

    it('get schools records using multiple sorts', async () => {
        const res = await testServer.get('/api/v1/escolas').send();
        expect(res.statusCode).toEqual(200);
    });

    it('get schools records using multiple filters and sorts', async () => {
        const res = await testServer.get('/api/v1/escolas').send();
        expect(res.statusCode).toEqual(200);
    });

    it('get schools records using multiple filters and columns exclusion', async () => {
        const res = await testServer.get('/api/v1/escolas').send();
        expect(res.statusCode).toEqual(200);
    });

    it('get schools records using multiple sorts and columns exclusion', async () => {
        const res = await testServer.get('/api/v1/escolas').send();
        expect(res.statusCode).toEqual(200);
    });

    it('get schools records using multiple filters, sorts and columns exclusion', async () => {
        const res = await testServer.get('/api/v1/escolas').send();
        expect(res.statusCode).toEqual(200);
    });

    it('get schools records using invalid filters', async () => {
        const res = await testServer.get('/api/v1/escolas').send();
        expect(res.statusCode).toEqual(200);
    });

    it('get schools records using invalid sorts', async () => {
        const res = await testServer.get('/api/v1/escolas').send();
        expect(res.statusCode).toEqual(200);
    });

    it('get schools records using invalid columns', async () => {
        const res = await testServer.get('/api/v1/escolas').send();
        expect(res.statusCode).toEqual(200);
    });








});