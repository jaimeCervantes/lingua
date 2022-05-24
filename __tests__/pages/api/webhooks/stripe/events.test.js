import { doActionBasedOnEvent, updateSchedule } from 'pages/api/webhooks/stripe/events';
import { fetchAPI } from 'util/api';
import chargeSucceeded from 'doubles/premium-classes/dummies/charge.succeeded-event';

jest.mock('util/api');

describe('When "/api/webhooks/stripe/events" receive events as result of a subscription payment', () => {
  describe('And the event "charge.succeeded" is received with empty metadata', () => {
    it('Then doActionBaseOnEvent should not have neither metadata nor lines', async () => {
      const result = await doActionBasedOnEvent(chargeSucceeded);
  
      expect(result).toBe('charge.succeeded');
      expect(chargeSucceeded.data.object.metadata?.scheduleId).toBeUndefined();
      expect(chargeSucceeded.data.object.lines).toBeUndefined();
    });

    it('Then updateSchedule should be invoke by doActionBaseOnEvent with empty metadata and do not update a schedule', async () => {
      const result = await updateSchedule({});
  
      expect(result).toBeUndefined();
    });
  });

  it('Then the event "invoice.payment_succeeded" should be sent with metadata in "lines" prop', async () => {
    fetchAPI.mockResolvedValue({
      data: {
        id: 199,
        attributes: {},
        meta: {}
      },
      meta: {}
    });

    const result = await updateSchedule({ scheduleId: 199, availableSeats: 6 })
    expect(result.data.id).toBe(199);
  });
});