import { useState, useEffect } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useForm, useFieldArray } from 'react-hook-form';

import useToast from 'src/hooks/useToast';
import { requestStateAtom, loadingStateAtom } from 'src/atom/atom';
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
  const [isLoading, setLoading] = useRecoilState(loadingStateAtom);
  const navigate = useNavigate();
  const [isCorrect, setIsCorrect] = useState(false);

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

  const firstInputWatch = customForm.watch('name.0.mean');

  const addInputElement = () => {
    customFieldArray.append({ mean: '' });
  };

  const removeInputElement = (index: number) => {
    return () => {
      customFieldArray.remove(index);
    };
  };

  const submitAction = async (data: FormType) => {
    const dataArray = data.name.map((name) => name.mean);
    const meanArray = dataArray.filter((data) => data !== '');

    if (!nameState.firstName || !nameState.lastName) {
      return toast.error('본명을 입력해주세요.');
    }

    if (!firstInputWatch) {
      return toast.error('반드시 한 개이상의 의미가 입력되어야 합니다.');
    }
    setRequestState({
      firstName: nameState.firstName,
      lastName: nameState.lastName,
      isCorrect: true,
    });

    try {
      setLoading(true);
      const start = Date.now();
      const response = await postTransfer(meanArray);
      const end = Date.now();
      if (end - start < 3000) {
        setTimeout(() => {
          setLoading(false);
          const result = response.data.reduce((str, mean) => {
            if (!str) return mean;
            return `${str}+${mean}`;
          }, '');
          navigate(
            `/result?result=${result}&original=${meanArray.join(
              '+'
            )}&name=${`${nameState.lastName}${nameState.firstName}`}&type=name`
          );
        }, 3000 - (end - start));
      } else {
        setLoading(false);
        const result = response.data.reduce((str, mean) => {
          if (!str) return mean;
          return `${str}+${mean}`;
        }, '');
        navigate(
          `/result?result=${result}&original=${meanArray.join(
            '+'
          )}&name=${`${nameState.lastName}${nameState.firstName}`}&type=name`
        );
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
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

  useEffect(() => {
    if (nameState.firstName && nameState.lastName && firstInputWatch) {
      setIsCorrect(true);
    } else {
      isCorrect && setIsCorrect(false);
    }
  }, [nameState, firstInputWatch]);

  return {
    ...customForm,
    ...customFieldArray,
    isCorrect,
    isLoading,
    addInputElement,
    removeInputElement,
    submitAction,
    firstNameChange,
    lastNameChange,
  };
};

export { useCustomForm };
