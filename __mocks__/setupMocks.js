global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  }),
);
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
