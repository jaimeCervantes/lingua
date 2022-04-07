import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';

export default function LlamaBookingCalendar(props) {
  return (
    <FullCalendar
      plugins={[ timeGridPlugin ]}
      expandRows={true}
      allDaySlot={false}
      initialView="timeGridWeek"
      aspectRatio={1}
      firstDay={new Date().getDay()}
      slotDuration="01:00:00"
      slotMinTime={`${new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours()}:00:00`}
      nowIndicator={true}
      {...props}
    ></FullCalendar>
  );
}