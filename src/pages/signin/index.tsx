import { useState } from 'react';
import * as S from './style';
import { closeEye, openEye } from '@/assets';
import { selectIcon } from '@/assets';

const allergyList = [
  '갑각류',
  '견과',
  '달걀',
  '땅콩',
  '밀',
  '생선',
  '우유',
  '조개',
  '콩',
  '호두',
  '잣',
  '복숭아',
] as const;

const foodStyleList = [
  '프루테리언',
  '비건',
  '락토',
  '오보',
  '락토-오보',
  '페스코',
  '폴로',
  '플렉시테리언',
] as const;

const sexList = ['남자', '여자'] as const;

const SigninPage = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [idValue, setIdValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [nameValue, setNameValue] = useState<string>('');
  const [isShow, setIsShow] = useState<boolean>(false);
  const [allergyValue, setAllergyValue] = useState<string[]>([]);
  const [isAllergySelect, setIsAllergySelect] = useState<boolean>(false);
  const [foodStyleyValue, setFoodStyleValue] = useState<string[]>([]);
  const [isFoodStyleSelect, setIsFoodStyleSelect] = useState<boolean>(false);
  const [sexValue, setSexValue] = useState<string>('');
  const [isSexSelect, setIsSexSelect] = useState<boolean>(false);
  const [ageValue, setAgeValue] = useState<string>('');
  const [heightValue, setHeightValue] = useState<string>('');
  const [weightValue, setWeightValue] = useState<string>('');

  const isStep1 = step === 1;

  return (
    <S.Container>
      <S.Title>{isStep1 ? '회원가입' : '내 정보 입력'}</S.Title>
      <S.Description>
        {isStep1
          ? '계정을 생성해서 삐빅을 사용해보세요'
          : '내 정보를 입력하고 삐빅을 사용해보세요'}
      </S.Description>

      {isStep1 && (
        <>
          <S.InputBox>
            <S.Input
              value={idValue}
              onChange={(e) => setIdValue(e.target.value)}
              placeholder='아이디를 입력해주세요.'
            />

            <S.PasswordWrapper>
              <S.Input
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                placeholder='비밀번호를 입력해주세요.'
                type={isShow ? 'text' : 'password'}
              />
              <S.EyeButton onClick={() => setIsShow((prev) => !prev)}>
                <S.EyeImage src={isShow ? openEye : closeEye} />
              </S.EyeButton>
            </S.PasswordWrapper>
            <S.Input
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              placeholder='이름를 입력해주세요.'
            />
          </S.InputBox>
          <S.NextButton
            variant='contained'
            onClick={() => {
              setStep(2);
            }}
          >
            다음
          </S.NextButton>
        </>
      )}

      {!isStep1 && (
        <>
          <S.InputBox>
            <S.SelectBox>
              <S.SelectWrapper>
                <S.Select
                  placeholder='알레르기를 선택해주세요'
                  value={JSON.stringify(allergyValue)
                    .replaceAll(/[["\]]/g, '')
                    .replaceAll(',', ', ')}
                  onClick={() => setIsAllergySelect((prev) => !prev)}
                />
                <S.SelectIcon src={selectIcon} />
              </S.SelectWrapper>
              {isAllergySelect && (
                <S.SelectDropDown>
                  {allergyList.map((allergy) => (
                    <S.SelectOption
                      isSeleted={allergyValue.includes(allergy)}
                      onClick={() => {
                        if (allergyValue.includes(allergy)) {
                          const filteredList = allergyValue.filter(
                            (currentAllergy) => currentAllergy !== allergy
                          );

                          setAllergyValue(filteredList);
                        } else {
                          setAllergyValue((prev) => [...prev, allergy]);
                        }

                        setIsAllergySelect(false);
                      }}
                    >
                      {allergy}
                    </S.SelectOption>
                  ))}
                </S.SelectDropDown>
              )}
            </S.SelectBox>
            <S.SelectBox>
              <S.SelectWrapper>
                <S.Select
                  placeholder='선호하는 음식 스타일을 선택해주세요'
                  value={JSON.stringify(foodStyleyValue)
                    .replaceAll(/[["\]]/g, '')
                    .replaceAll(',', ', ')}
                  onClick={() => setIsFoodStyleSelect((prev) => !prev)}
                />
                <S.SelectIcon src={selectIcon} />
              </S.SelectWrapper>
              {isFoodStyleSelect && (
                <S.SelectDropDown>
                  {foodStyleList.map((foodStyle) => (
                    <S.SelectOption
                      isSeleted={foodStyleyValue.includes(foodStyle)}
                      onClick={() => {
                        if (foodStyleyValue.includes(foodStyle)) {
                          const filteredList = foodStyleyValue.filter(
                            (currentFoodStyle) => currentFoodStyle !== foodStyle
                          );

                          setFoodStyleValue(filteredList);
                        } else {
                          setFoodStyleValue((prev) => [...prev, foodStyle]);
                        }

                        setIsFoodStyleSelect(false);
                      }}
                    >
                      {foodStyle}
                    </S.SelectOption>
                  ))}
                </S.SelectDropDown>
              )}
            </S.SelectBox>
            <S.InputSection>
              <S.InputWrapper>
                <S.Input
                  value={ageValue}
                  onChange={(e) => setAgeValue(e.target.value)}
                  placeholder='나이를 입력해주세요.'
                />
              </S.InputWrapper>
              <S.InputWrapper>
                <S.SelectBox>
                  <S.SelectWrapper>
                    <S.Select
                      placeholder='성별을 선택해주세요.'
                      value={sexValue}
                      onClick={() => setIsSexSelect((prev) => !prev)}
                    />
                    <S.SelectIcon src={selectIcon} />
                  </S.SelectWrapper>

                  {isSexSelect && (
                    <S.SelectDropDown>
                      {sexList.map((sex) => (
                        <S.SelectOption
                          isSeleted={sexValue.includes(sex)}
                          onClick={() => {
                            if (sexValue.includes(sex)) {
                              setSexValue('');
                            } else {
                              setSexValue(sex);
                            }

                            setIsSexSelect(false);
                          }}
                        >
                          {sex}
                        </S.SelectOption>
                      ))}
                    </S.SelectDropDown>
                  )}
                </S.SelectBox>
              </S.InputWrapper>
            </S.InputSection>
            <S.InputSection>
              <S.InputWrapper>
                <S.Input
                  value={heightValue}
                  onChange={(e) => setHeightValue(e.target.value)}
                  placeholder='신장을 입력해주세요.'
                />
              </S.InputWrapper>
              <S.InputWrapper>
                <S.Input
                  value={weightValue}
                  onChange={(e) => setWeightValue(e.target.value)}
                  placeholder='체중을 입력해주세요.'
                />
              </S.InputWrapper>
            </S.InputSection>
          </S.InputBox>
          <S.SignInButton variant='contained'>회원가입</S.SignInButton>
        </>
      )}
    </S.Container>
  );
};

export default SigninPage;