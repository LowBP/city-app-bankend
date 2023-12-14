import request from 'supertest';
import app from '../app';

describe('City Controller', () => {
    it('should get a list of cities', async () => {
        const response = await request(app).get('/api/cities');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('cities');
    });

    it('should get a list of cities with search filter', async () => {
        const response = await request(app).get('/api/cities?searchTerm=Sydney');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('cities');
    });

    it('should get a list of cities with pagination', async () => {
        const response = await request(app).get('/api/cities?page=1&pageSize=5');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('cities');
    });

    it('should get a list of cities with sorting', async () => {
        const response = await request(app).get('/api/cities?sortBy=population&sortOrder=desc');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('cities');
    });

    it('should get a list of cities sorted by population in ascending order', async () => {
        const response = await request(app).get('/api/cities?sortBy=population&sortOrder=asc');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('cities');
        const cities = response.body.cities;
        for (let i = 1; i < cities.length; i++) {
            expect(parseInt(cities[i].population, 10)).toBeGreaterThanOrEqual(parseInt(cities[i - 1].population, 10));
        }
    });

    it('should get a list of cities sorted by founded year in descending order', async () => {
        const response = await request(app).get('/api/cities?sortBy=founded&sortOrder=desc');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('cities');
        const cities = response.body.cities;
        for (let i = 1; i < cities.length; i++) {
            expect(parseInt(cities[i].founded, 10)).toBeLessThanOrEqual(parseInt(cities[i - 1].founded, 10));
        }
    });

    it('should get a list of cities with pagination', async () => {
        const response = await request(app).get('/api/cities?page=2&pageSize=5');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('cities');
        const cities = response.body.cities;
        expect(cities.length).toBe(5);
    });

    it('should get a list of cities with search filter and sorting', async () => {
        const response = await request(app).get('/api/cities?searchTerm=Sydney&sortBy=population&sortOrder=desc');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('cities');
        const cities = response.body.cities;
        expect(cities.length).toBeGreaterThan(0);
    });
    it('should get a list of cities sorted by name in ascending order', async () => {
        const response = await request(app).get('/api/cities?page=1&search=&sortBy=name&sortOrder=asc');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('cities');
        const cities = response.body.cities;

        expect(cities[0].name).toBe('Bangkok');

    });


    it('should get a list of cities with a large page size', async () => {
        const response = await request(app).get('/api/cities?page=1&pageSize=100');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('cities');
    });

    it('should get an empty list of cities when search term does not match', async () => {
        const response = await request(app).get('/api/cities?page=1&search=NonExistentCity');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('cities');
        expect(response.body.cities.length).toBe(0);
    });

    it('should get a list of cities with special characters in the search term', async () => {
        const response = await request(app).get('/api/cities?searchTerm=%23Tokyo');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('cities');
    });

    it('should get a list of cities with invalid pagination parameters (negative page)', async () => {
        const response = await request(app).get('/api/cities?page=-1&pageSize=10');
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error', 'Invalid pagination parameters');
    });

    it('should get a list of cities with invalid sorting parameters', async () => {
        const response = await request(app).get('/api/cities?sortBy=invalidField&sortOrder=invalidOrder');
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error', 'Invalid sortBy parameter');
    });


    it('should return 400 Bad Request for invalid sortBy parameter', async () => {
        const response = await request(app).get('/api/cities?sortBy=invalidField');
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error', 'Invalid sortBy parameter');
    });

    it('should return 400 Bad Request for invalid sortOrder parameter', async () => {
        const response = await request(app).get('/api/cities?sortOrder=invalidOrder');
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error', 'Invalid sortOrder parameter');
    });

    it('should return 400 Bad Request for negative page parameter', async () => {
        const response = await request(app).get('/api/cities?page=-1');
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error', 'Invalid pagination parameters');
    });

    it('should return 400 Bad Request for negative pageSize parameter', async () => {
        const response = await request(app).get('/api/cities?pageSize=-1');
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error', 'Invalid pagination parameters');
    });

    it('should return 200 OK for valid pagination parameters', async () => {
        const response = await request(app).get('/api/cities?page=1&pageSize=10');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('cities');
    });

    it('should handle errors and return a 500 status code', async () => {
        jest.spyOn(require('../services/cityService'), 'getCities').mockImplementation(() => {
            throw new Error('Test error');
        });

        const response = await request(app).get('/api/cities');
        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty('error', 'Internal Server Error');
    });

});
