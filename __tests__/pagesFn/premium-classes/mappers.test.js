import { mapSchedules } from 'pagesFn/premium-classes/mappers';
import classItem from 'doubles/premium-classes/dummies/product';

describe('Given several schedules fields in an stripe class', () => {
  describe('When user wants to see schedules', () => {
    it('Then mapSchedules should merge of fields in an unique schedule array field', () => {
      const schedules = mapSchedules(classItem.metadata);

      expect(schedules.length).toBeGreaterThan(0);
      expect(schedules[0].repeats).toEqual(true);
    });
  });
});