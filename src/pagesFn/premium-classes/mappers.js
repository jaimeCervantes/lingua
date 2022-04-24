export function mapClassesToUI(classes) {
  return classes.map(item => {
    const schedules = item.metadata?.schedules  || '[]';

    return {
      id: item.id,
      name: item.name,
      description: item.description,
      image: item.images ? item.images[0] : '',
      price: item.metadata?.price || '',
      priceId: item.metadata?.priceId || '',
      language: item.metadata?.language || '',
      flagCode: item.metadata?.flagCode || '',
      schedules:  JSON.parse(schedules)
    }
  })
}

export function mapSchedulesCapacity(data) {
  return data.map(schedule => ({
    id: schedule.id,
    availableSeats: schedule.attributes.availableSeats,
    capacity: schedule.attributes.capacity,
    date: schedule.attributes.date,
    productId: schedule.attributes.productId,
    time: schedule.attributes.time,
    timeZoneOffset: schedule.attributes.timeZoneOffset
  }));
}