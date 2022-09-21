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
