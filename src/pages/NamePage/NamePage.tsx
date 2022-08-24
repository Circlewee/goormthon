import { useState, useRef } from 'react';
import { nanoid } from 'nanoid';

import * as SC from './NamePage.style';
import { Label } from '../../components/Form/Label';
import { Input } from '../../components/Form/Input';

const NamePage = () => {
  const [extraInput, setExtraInput] = useState(1);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameData: string[] = [];
    for (let i = 0; i < e.currentTarget.length; i++) {
      if (e.currentTarget[i] instanceof HTMLInputElement) {
        // nameData.push(e.currentTarget[i].value);
      }
    }
  };

  const handleInputAdd = () => {
    setExtraInput((prevState) => prevState + 1);
  };

  const handleInputDelete = () => {
    setExtraInput((prevState) => prevState - 1);
  };

  return (
    <div>
      <SC.Wrapper>
        <SC.RealNameContainer>
          <div>
            <Label htmlFor='lastName'>성</Label>
            <Input id='lastName' placeholder='성' name='lastName' width={98} />
          </div>
          <div>
            <Label htmlFor='firstName'>이름</Label>
            <Input id='firstName' placeholder='이름' name='firstName' />
          </div>
        </SC.RealNameContainer>
        <SC.Form onSubmit={handleSubmit} ref={formRef}>
          <SC.ExplanationText>
            이름의 의미를 동사로 작성해주세요.
            <br />
            (빛날)희 (착할)선 &gt; 빛나다, 착하다
          </SC.ExplanationText>
          <SC.NameMeanContainer>
            <Label htmlFor='meanInputFirst'>1번째 의미</Label>
            <Input id='meanInputFirst' placeholder='빛나다' name='meanInputFirst' />
          </SC.NameMeanContainer>
          {Array(extraInput)
            .fill(0)
            .map((_, index) => {
              return (
                <SC.NameMeanContainer key={nanoid()}>
                  <Label htmlFor={`meanInput${index + 2}`}>{index + 2}번째 의미</Label>
                  <SC.InputWrapper>
                    <Input
                      id={`meanInput${index + 2}`}
                      placeholder='착하다'
                      name={`meanInput${index + 2}`}
                    />
                    {index === extraInput - 1 && (
                      <SC.DeleteButton type='button' onClick={handleInputDelete}>
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
