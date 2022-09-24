import * as SC from './NamePage.style';
import { Label } from 'src/components/Common/Label';
import { Input } from 'src/components/Common/Input';
import { useCustomForm } from 'src/hooks/useCustomForm';
import { Emoji } from 'src/components/Common/Emoji';
import { LoadingWithTitle } from 'src/components/Common/Loading/LoadingWithTitle';

const NamePage = () => {
  const {
    register,
    handleSubmit,
    fields,
    isCorrect,
    isLoading,
    addInputElement,
    removeInputElement,
    submitAction,
    realNameChange,
  } = useCustomForm();

  // eslint-disable-next-line no-constant-condition
  return isLoading ? (
    <LoadingWithTitle />
  ) : (
    <main>
      <SC.Wrapper>
        <SC.RealNameContainer>
          <div style={{ width: '100%' }}>
            <Label htmlFor='realName'>이름</Label>
            <Input id='realName' placeholder='이름' onChange={realNameChange} />
          </div>
        </SC.RealNameContainer>
        <SC.DivideLine />
        <SC.Form onSubmit={handleSubmit(submitAction)}>
          <SC.ExplanationText>
            이름의 <strong>의미</strong>를 작성해주세요!
            <Emoji emoji='👇' />
          </SC.ExplanationText>
          {fields.map((field, index) => {
            return (
              <SC.NameMeanContainer key={field.id}>
                <Label htmlFor={`meanInput${index}`}>의미 {index + 1}</Label>
                <SC.InputWrapper>
                  <Input
                    id={`meanInput${index}`}
                    placeholder='예시) 빛나다, 착한 등'
                    register={register(`name.${index}.mean` as const)}
                  />
                  {fields.length !== 1 && index === fields.length - 1 && (
                    <SC.DeleteButton type='button' onClick={removeInputElement(index)}>
                      삭제
                    </SC.DeleteButton>
                  )}
                </SC.InputWrapper>
              </SC.NameMeanContainer>
            );
          })}
          <SC.AddInputButton type='button' onClick={addInputElement}>
            의미 추가하기
          </SC.AddInputButton>
          <SC.SubmitButton type='submit' disabled={!isCorrect}>
            제주일름 만들기
          </SC.SubmitButton>
        </SC.Form>
      </SC.Wrapper>
    </main>
  );
};

export default NamePage;
