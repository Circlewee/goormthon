import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useForm, useFieldArray } from 'react-hook-form';

import useToast from 'src/hooks/useToast';
import { requestStateAtom } from 'src/atom/atom';
import { postTransfer } from 'src/api/api';

export type FormType = {
  name: {
    mean: string;
  }[];
};

const useCustomForm = () => {
  const [nameState, setNameState] = useState({ firstName: '', lastName: '' });
  const toast = useToast();
  const setRequestState = useSetRecoilState(requestStateAtom);
  const navigate = useNavigate();

  const customForm = useForm<FormType>({
    mode: 'onChange',
    defaultValues: {
      name: [{ mean: '' }, { mean: '' }],
    },
  });

  const customFieldArray = useFieldArray({
    name: 'name',
    control: customForm.control,
  });

  const addInputElement = () => {
    customFieldArray.append({ mean: '' });
  };

  const removeInputElement = (index: number) => {
    return () => {
      customFieldArray.remove(index);
    };
  };

  const submitAction = async (data: FormType) => {
    const meanArray = data.name.map((name) => name.mean);

    if (!nameState.firstName || !nameState.lastName) {
      return toast.error('본명을 입력해주세요.');
    }

    if (meanArray.length === 0) {
      return toast.error('반드시 한 개이상의 의미가 입력되어야 합니다.');
    }

    setRequestState({
      firstName: nameState.firstName,
      lastName: nameState.lastName,
      isCorrect: true,
    });

    const response = await postTransfer(meanArray);
    navigate(`/result?result=${response.data}&type=name`);
  };

  const firstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameState((prevState) => {
      return { ...prevState, firstName: e.target.value };
    });
  };

  const lastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameState((prevState) => {
      return { ...prevState, lastName: e.target.value };
    });
  };

  return {
    ...customForm,
    ...customFieldArray,
    addInputElement,
    removeInputElement,
    submitAction,
    firstNameChange,
    lastNameChange,
  };
};

export { useCustomForm };
