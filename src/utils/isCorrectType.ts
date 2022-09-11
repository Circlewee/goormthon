// TODO: 함수 로직 수정해야할듯..?
const isCorrectType = (
  o: any,
  type: 'string' | 'number' | 'boolean',
  handleIncorrect: () => void
) => {
  if (typeof o === type) {
    return o;
  }
  handleIncorrect();
};

export default isCorrectType;
