export function mapClassesToUI(classes) {
  return classes.map(item => {
    const schedules = item.metadata?.schedules  || '[]';

    return {
      id: item.id,
      name: item.name,
      description: item.description,
      image: item.images ? item.images[0] : '',
      language: item.metadata?.language || '',
      flagCode: item.metadata?.flagCode || '',
      schedules:  mapSchedules(item.metadata)
    }
  })
}

export function mapSchedules(metadata) {
  if (!metadata) {
    return [];
  }

  const schedules = [];
  for (const [key, value] of Object.entries(metadata)) {
    if (/schedule/i.test(key)) {
      const schedule = parseSchedule(value);
      if (schedule?.repeats || schedule?.start) {
        schedules.push(schedule);
      }
    }
  }

  return schedules;
}

function parseSchedule(value) {
  try {
    return JSON.parse(value);
  } catch(err) {
    console.error(err);
    return false
  }

  return schedule;
}