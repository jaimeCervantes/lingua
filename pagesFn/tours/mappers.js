export function mapToursToUI(tours) {
  return tours.map(item => ({ title: item.attributes.title, description: item.attributes.description }));
}