Object.defineProperty(window, 'fetch', {
  writable: true,
  value: jest.fn()
});