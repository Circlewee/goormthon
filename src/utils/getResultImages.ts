import * as images from '../assets';

const arrayT = [
  images.imgT1,
  images.imgT2,
  images.imgT3,
  images.imgT4,
  images.imgT5,
  images.imgT6,
  images.imgT7,
];

const arrayB = [images.imgB2, images.imgB3];

const randomImg = (array: string[]) => {
  const random = Math.ceil(Math.random() * array.length);

  return array[random - 1];
};

const getResultImages = (type: 'name' | 'birthday', date?: { month: number; date: number }) => {
  const month = new Date().getMonth();
  const result = { background: '', imgT: '', imgB: '' };

  switch (type) {
    case 'name':
      if (month >= 2 && month <= 4) {
        result.background = images.bg1;
        result.imgB = images.imgB1;
      } else if (month >= 5 && month <= 10) {
        result.background = images.bg2;
        result.imgB = randomImg(arrayB);
      } else {
        result.background = images.bg4;
        result.imgB = images.imgB4;
      }

      result.imgT = randomImg(arrayT);

      break;
    case 'birthday':
      if (!date) return result;
      if (date.month >= 2 && date.month <= 4) {
        result.background = images.bg1;
        result.imgB = images.imgB1;
      } else if (date.month >= 5 && date.month <= 10) {
        result.background = images.bg2;
        result.imgB = randomImg(arrayB);
      } else {
        result.background = images.bg4;
        result.imgB = images.imgB4;
      }

      result.imgT = randomImg(arrayT);

      break;
  }

  return result;
};

export default getResultImages;
