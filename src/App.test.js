import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
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
            //Click on select season
            const selection = screen.queryByText(/select/i);            
            userEvent.click(selection);

            //click on season 1
            const season = screen.queryByText(/season 1/i);
            userEvent.click(season);

            //Get all episodes by Test ID
            const episodes = screen.queryAllByTestId('episode');
            
            //Checkout screen output of the episodes
            screen.debug(episodes);

            //Check that only 1 episode was in the DOM
            expect(episodes).toHaveLength(1);
        })
    });


});