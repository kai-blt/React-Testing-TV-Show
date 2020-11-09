import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';

//Setup mock API call by importing fetchShow as a mock
import { fetchShow as mockFetchShow } from './api/fetchShow';
jest.mock('./api/fetchShow');


describe('App Unit Tests', () => {

    const mockData = {
        data: {
            image: {
                medium: 'http://www.www.com',
                original: 'http://www.www.com'
            },
            summary: 'THIS IS A SUMMARY',
            _embedded: {
                episodes: [
                    {
                    id: 1,
                    url: 'http://www.www.com',
                    name: 'Name',
                    season: 1,
                    number: 2,
                    runtime: 10,
                    image: {
                        medium: 'http://www.www.com',
                        original: 'http://www.www.com'
                    }
                }]
            }
        }
    };


    test('Can fetch and render data', async () => {
        mockFetchShow.mockResolvedValueOnce(mockData);

        render(<App />);        

        await waitFor(() => {
            const selection = screen.queryByText(/select/i);
            fireEvent.click(selection);
            screen.debug()
            const season = screen.queryByText(/season 1/i);
            // screen.debug(season)
        })
    });


});


