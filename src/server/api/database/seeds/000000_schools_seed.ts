import { Knex } from 'knex';
import { TableNames } from '../Tables';
import { faker } from '@faker-js/faker';


export const seed = async (knex: Knex) => {
    console.log('Seeding....');
    const records = [];
    for(let i=1; i <= 25; i++){
        records.push({
            nome: faker.person.fullName(), 
            municipio: faker.company.name(), 
            uf: faker.location.countryCode('alpha-3'),
            ideb: faker.number.float({min: 0.1, max: 3.0}),
            latitude: faker.location.latitude(),
            longitude: faker.location.longitude(),
            porte: faker.number.int({min: 0, max: 3})
        });
    }

    records.push({
        nome: 'Escola Raimundo da Paz', 
        municipio: 'Lagoa Azul', 
        uf: 'ma',
        ideb: 3.5,
        latitude: faker.location.latitude(),
        longitude: faker.location.longitude(),
        porte: faker.number.int({min: 4, max: 8})
    });
    records.push({
        nome: 'Escola Santa Luzia', 
        municipio: 'Piripiri', 
        uf: 'pi',
        ideb: 3.75,
        latitude: faker.location.latitude(),
        longitude: faker.location.longitude(),
        porte: faker.number.int({min: 4, max: 8})
    });
    records.push({
        nome: 'Escola Constantino Pereira', 
        municipio: 'Teresina', 
        uf: 'se',
        ideb: 4.0,
        latitude: faker.location.latitude(),
        longitude: faker.location.longitude(),
        porte: faker.number.int({min: 4, max: 8})
    });
    records.push({
        nome: 'Escola Damasco Cruz', 
        municipio: 'Lins', 
        uf: 'sp',
        ideb: 4.25,
        latitude: faker.location.latitude(),
        longitude: faker.location.longitude(),
        porte: faker.number.int({min: 4, max: 8})
    });
    records.push({
        nome: 'Escola José Cunha', 
        municipio: 'Canhanhão', 
        uf: 'al',
        ideb: 4.5,
        latitude: faker.location.latitude(),
        longitude: faker.location.longitude(),
        porte: faker.number.int({min: 4, max: 8})
    });
    records.push({
        nome: 'Escola Hélio Nonato', 
        municipio: 'Corrente', 
        uf: 'pi',
        ideb: 4.75,
        latitude: faker.location.latitude(),
        longitude: faker.location.longitude(),
        porte: faker.number.int({min: 4, max: 8})
    });
    records.push({
        nome: 'Escola Vitória Augusta', 
        municipio: 'Cruzeiro', 
        uf: 'ba',
        ideb: 5.0,
        latitude: faker.location.latitude(),
        longitude: faker.location.longitude(),
        porte: faker.number.int({min: 4, max: 8})
    });
    records.push({
        nome: 'Escola Conceição Nunes', 
        municipio: 'Canção das águas', 
        uf: 'pe',
        ideb: 5.25,
        latitude: faker.location.latitude(),
        longitude: faker.location.longitude(),
        porte: faker.number.int({min: 4, max: 8})
    });
    records.push({
        nome: 'Escola Dom Pedro', 
        municipio: 'Monteiro Lobato', 
        uf: 'pr',
        ideb: 5.5,
        latitude: faker.location.latitude(),
        longitude: faker.location.longitude(),
        porte: faker.number.int({min: 4, max: 8})
    });
    records.push({
        nome: 'Escola IESB', 
        municipio: 'Monte Alegre', 
        uf: 'pi',
        ideb: 5.75,
        latitude: faker.location.latitude(),
        longitude: faker.location.longitude(),
        porte: faker.number.int({min: 4, max: 8})
    });

    await knex(TableNames.school).insert(records);
    console.log('Seeding....Ok');
    
    
};