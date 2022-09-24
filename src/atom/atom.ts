import { atom } from 'recoil';

interface RequestStateType {
  firstName: string;
  lastName: string;
  isCorrect: boolean;
}

export const requestStateAtom = atom<RequestStateType>({
  key: 'requestState',
  default: { firstName: '', lastName: '', isCorrect: false },
});

export const loadingStateAtom = atom<boolean>({
  key: 'loadingState',
  default: false,
});
