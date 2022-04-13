export function mapClassesToUI(classes) {
  return classes.map(item => {
    return {
      id: item.id,
      name: item.name,
      description: item.description,
      image: item.images ? item.images[0] : '',
      price: item.metadata?.price || '',
      language: item.metadata?.language || '',
      flagCode: item.metadata?.flagCode || '',
      schedules: item.metadata?.schedules || ''
    }
  })
}