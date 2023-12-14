import { Request, Response } from 'express';
import { getCities } from '../services/cityService';
import { ICity } from '../types';

export const getCitiesController = (req: Request, res: Response): void => {
    try {
        const allCities: ICity[] = getCities();

        // Search filter
        const searchTerm: string = req.query.search as string || '';
        const filteredCities: ICity[] = [...searchTerm
            ? allCities.filter(city =>
                Object.values(city).some(value =>
                    typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
                )
            )
            : allCities];

        // Sorting parameters (population, founded, name)
        const sortBy: string = req.query.sortBy as string;
        const sortOrder: string = req.query.sortOrder as string;

        // Sort the filtered cities based on the selected criteria

        const sortedCities = sortBy && sortOrder ? filteredCities.sort((a, b) => {
            switch (sortBy) {
                case 'population':
                    const populationA = parseInt(a.population, 10);
                    const populationB = parseInt(b.population, 10);
                    return sortOrder === 'asc' ? populationA - populationB : populationB - populationA;

                case 'founded':
                    const foundedA = parseInt(a.population, 10);
                    const foundedB = parseInt(b.population, 10);
                    return sortOrder === 'asc' ? foundedA - foundedB : foundedB - foundedA;

                default:
                    // Default to sorting by city name
                    const nameA = a.name.toLowerCase();
                    const nameB = b.name.toLowerCase();
                    return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
            }

        }) : filteredCities;


        // Pagination parameters
        const page = parseInt(req.query.page as string, 10) || 1;
        const pageSize = parseInt(req.query.pageSize as string, 10) || 10;

        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedCities = sortedCities.slice(startIndex, endIndex);

        const totalPages = Math.ceil(sortedCities.length / pageSize);

        const response = {
            totalCities: sortedCities.length,
            totalPages,
            currentPage: page,
            pageSize,
            cities: paginatedCities,
        };

        // Simulate a delay of 500 milliseconds before sending the response
        setTimeout(() => {
            res.status(200).json(response);
        }, 1500);
    } catch (error) {
        console.error('Error fetching cities:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
