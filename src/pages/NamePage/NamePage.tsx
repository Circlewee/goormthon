import { useForm, useFieldArray } from 'react-hook-form';

import * as SC from './NamePage.style';
import { Label } from '../../components/Form/Label';
import { Input } from '../../components/Form/Input';
import useToast from '../../hooks/useToast';

type FormType = {
  name: {
    mean: string;
  }[];
};

const NamePage = () => {
  const toast = useToast();
  const { register, control, handleSubmit } = useForm<FormType>({
    mode: 'onChange',
    defaultValues: {
      name: [{ mean: '' }, { mean: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: 'name',
    control,
  });

  const abc = (data: FormType) => {
    const meanArray = data.name.map((name) => name.mean);

    if (!meanArray[0]) {
      return toast.error('반드시 한 개이상의 의미가 입력되어야 합니다.');
    }

    console.log(meanArray);
  };

  const handleInputAdd = () => {
    append({ mean: '' });
  };

  const handleInputDelete = (index: number) => {
    return () => {
      remove(index);
    };
  };

  return (
    <div>
      <SC.Wrapper>
        <SC.RealNameContainer>
          <div>
            <Label htmlFor='lastName'>성</Label>
            <Input id='lastName' placeholder='성' width={98} />
          </div>
          <div>
            <Label htmlFor='firstName'>이름</Label>
            <Input id='firstName' placeholder='이름' />
          </div>
        </SC.RealNameContainer>
        <SC.Form onSubmit={handleSubmit(abc)}>
          <SC.ExplanationText>
            이름의 의미를 동사로 작성해주세요.
            <br />
            (빛날)희 (착할)선 &gt; 빛나다, 착하다
          </SC.ExplanationText>
          {fields.map((field, index) => {
            return (
              <SC.NameMeanContainer key={field.id}>
                <Label htmlFor={`meanInput${index}`}>{index + 1}번째 의미</Label>
                <SC.InputWrapper>
                  <Input
                    id={`meanInput${index}`}
                    placeholder='착하다'
                    register={register(`name.${index}.mean` as const)}
                  />
                  {fields.length !== 1 && index === fields.length - 1 && (
                    <SC.DeleteButton type='button' onClick={handleInputDelete(index)}>
                      -
                    </SC.DeleteButton>
                  )}
                </SC.InputWrapper>
              </SC.NameMeanContainer>
            );
          })}
          <SC.AddInputButton type='button' onClick={handleInputAdd}>
            의미 추가
          </SC.AddInputButton>
          <SC.SubmitButton type='submit'>제주 이름 생성</SC.SubmitButton>
        </SC.Form>
      </SC.Wrapper>
    </div>
  );
};

export default NamePage;
