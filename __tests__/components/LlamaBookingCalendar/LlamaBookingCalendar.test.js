import LlamaBookingCalendar from 'components/LlamaBookingCalendar/LlamaBookingCalendar';
import { render, screen, fireEvent } from '@testing-library/react';


describe('When user wants to load previous week events', () => {
  it('Then onPrev prop should be invoked', () => {
    const onPrevSpy = jest.fn();
    const rendered = render(<LlamaBookingCalendar
      events={[]}
      eventClick={(e) => (e)}
      slotMinTime='00:00'
      onPrev={onPrevSpy}
    ></LlamaBookingCalendar>);

    fireEvent(rendered.getByTitle('Prev'), new MouseEvent('click', { bubbles: true }));

    expect(onPrevSpy).toBeCalled();
  });
});

describe('When user wants to load next week events', () => {
  it('Then onPrev prop should be invoked', () => {
    const onNextSpy = jest.fn();
    const rendered = render(<LlamaBookingCalendar
      events={[]}
      eventClick={(e) => (e)}
      slotMinTime='00:00'
      onNext={onNextSpy}
    ></LlamaBookingCalendar>);

    fireEvent(rendered.getByTitle('Next'), new MouseEvent('click', { bubbles: true }));

    expect(onNextSpy).toBeCalled();
  });
});