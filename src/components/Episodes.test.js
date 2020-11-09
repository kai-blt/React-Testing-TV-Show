import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Episodes from './Episodes';

describe('Episodes Unit Tests', () => {

    //Initial episode data
    const mockData = [{
        id: 1,
        image: 'http://image.com',
        name: 'Episode Name',
        season: 1,
        number: 10,
        runtime: 10,
        summary: 'THIS IS A SUMMARY'
    }];

    test('Episodes renders without errors', () => {
        render(<Episodes episodes={mockData}/>)
    });

    test('Episodes displays correct data', () => {
        render(<Episodes episodes={mockData}/>)

        screen.debug()

        //Capture the name of the episode
        const name = screen.queryByText(/Episode Name/i)

        //make sure data made it to the DOM
        expect(name).toBeInTheDocument();
    });

});
