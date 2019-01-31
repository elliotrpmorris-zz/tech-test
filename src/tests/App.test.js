test('Event', () => {
  // object
  var event = {
    data: {
      name: 'Game',
      startTime: '1232',
      linkedEventTypeName: 'test'
    }
  }
  //expect({value: 'value'}).toBeTruthy();
  expect(typeof event).toBe('object');
 
})