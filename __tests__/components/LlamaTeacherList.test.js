import { render } from '@testing-library/react';
import LlamaTeacherList from 'components/LlamaTeacherList/LlamaTeacherList';

describe('When users visit premiun-classes page', () => {
  it('Then they should see a list of teahcers', () => {
    const teachers = [
      {
        name: 'Jaime Cervantes',
        languages: [{ label: 'English', flagCode: 'en', img: null }],
        intro: 'Hello I am jaime and I am a English Teacher',
        scheduleAvailable: [{ date: '04-29-2022', time: '08:00 00' }],
        price: '15.00'
      }
    ]

    const teacherList = render(<LlamaTeacherList
      teachers={teachers}
    ></LlamaTeacherList>);

    expect(teacherList.getByText(teachers[0].name)).toBeVisible();
  });
})