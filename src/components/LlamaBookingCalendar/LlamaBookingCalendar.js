import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { useRef } from 'react';

export default function LlamaBookingCalendar(props) {
  const { onPrev, onNext, ...rest } = props
  const calendar = useRef(null);

  return (
    <FullCalendar
      ref={calendar}
      plugins={[ timeGridPlugin ]}
      expandRows={true}
      allDaySlot={false}
      initialView="timeGridWeek"
      aspectRatio={1}
      firstDay={new Date().getDay()}
      slotDuration="01:00:00"
      slotMinTime={`${new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours()}:00:00`}
      nowIndicator={true}
      customButtons={{
        prev: {
          text: 'Prev',
          click (e) {
            calendar.current._calendarApi.prev();
            if (typeof onPrev === 'function') {
              onPrev(calendar.current);
            }
          }
        },
        next: {
          text: 'Next',
          click(e) {
            calendar.current._calendarApi.next();
            if (typeof onNext === 'function') {
              onNext(calendar.current);
            }
          }
        }
      }}
      headerToolbar={{
        left: 'title',
        right: 'prev next'
      }}
      {...rest}
    ></FullCalendar>
  );
}
