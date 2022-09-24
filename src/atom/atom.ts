import { atom } from 'recoil';

interface RequestStateType {
  realName: string;
  isCorrect: boolean;
}

export const requestStateAtom = atom<RequestStateType>({
  key: 'requestState',
  default: { realName: '', isCorrect: false },
});

export const loadingStateAtom = atom<boolean>({
  key: 'loadingState',
  default: false,
});
