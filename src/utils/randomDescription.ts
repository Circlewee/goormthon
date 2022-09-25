const randomDescription = () => {
  const description = [
    '내 이름을 제주어로 바꾼다면?',
    '나의 제주 이름 만들기',
    '나만의 제주 이름 만들고 친구들과 공유해요!',
  ];

  return description[Math.ceil(Math.random() * 3)];
};

export { randomDescription };
