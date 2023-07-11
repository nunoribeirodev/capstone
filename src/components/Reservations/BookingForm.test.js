import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { updateTimes, initializeTimes } from '../../utils/utils';

test('Renders the Choose date label', () => {
    render(<BookingForm availableTimes={[]} />)
    const labelElement = screen.getByText('Choose date');
    expect(labelElement).toBeInTheDocument();
});

test('Renders the Choose time label', () => {
    render(<BookingForm availableTimes={[]} />)
    const labelElement = screen.getByText('Choose time');
    expect(labelElement).toBeInTheDocument();
});

test('Renders the Number of guests label', () => {
    render(<BookingForm availableTimes={[]} />)
    const labelElement = screen.getByText('Number of guests');
    expect(labelElement).toBeInTheDocument();
});

test('Renders the Occasion label', () => {
    render(<BookingForm availableTimes={[]} />)
    const labelElement = screen.getByText('Occasion');
    expect(labelElement).toBeInTheDocument();
});

test('initializeTimes returns the correct expected values', () => {
    const availableTimes = initializeTimes();
    expect(availableTimes).toEqual(['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:30']);
});

test('updateTimes turns the same value that is provided in the state', () => {
    const initialState = initializeTimes();
    const action = {
        type: 'addTimes',
        payload: '20:00'
    };
    const nextState = updateTimes(initialState, action);
    expect(nextState).toEqual(['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:30']);
});

test('form can be submitted', () => {
    const submitForm = jest.fn();
    const dispatch = jest.fn();
    const availableTimes = initializeTimes();
    render(<BookingForm submitForm={submitForm} availableTimes={availableTimes} dispatch={dispatch}/>);

    const dateField = screen.getByLabelText('Choose date');
    const guestsField = screen.getByLabelText('Number of guests');
    const submitButton = screen.getByText('Make your reservation');

    fireEvent.mouseDown(dateField);
    fireEvent.change(dateField, { target: { value: '2023-07-18' }});
    fireEvent.mouseDown(guestsField);
    fireEvent.change(guestsField, { target: { value: 5 }});
    expect(submitButton).toBeEnabled();

    fireEvent.click(submitButton);
    expect(submitForm).toHaveBeenCalled();
});