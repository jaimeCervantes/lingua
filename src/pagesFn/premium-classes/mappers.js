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