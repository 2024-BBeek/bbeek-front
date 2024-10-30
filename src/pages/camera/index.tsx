import { useRef, useState } from 'react';
import * as S from './style';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import Webcam from 'react-webcam';
import { AllergyDialog, Header } from '@/components';
import { camera1, barcode } from '@/assets';
import { axiosInstance } from '@/apis';

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <S.ProgressBarContainer>
      <S.ProgressBarFill progress={progress} />
    </S.ProgressBarContainer>
  );
};

const CameraPage: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const [step, setStep] = useState<number>(1);
  const [type, setType] = useState<boolean>(true);
  const [response, setResponse] = useState<any>();

  const handleShotButtonClick = async () => {
    if (webcamRef.current) {
      const imageUrl = webcamRef.current.getScreenshot();
      try {
        const response = await axiosInstance.post('/picture', {
          img: imageUrl?.split(',')[1],
        });

        setResponse(response.data);

        setStep(2);
      } catch {}
    }
  };

  const handleBarcodeScanned = async (barcode: string) => {
    try {
      const response = await axiosInstance.get(`/barcodes/${barcode}`);

      setResponse(response.data);
    } catch {}
  };

  return (
    <>
      <Header />
      <S.Container>
        {step === 1 && (
          <S.ScannerWrapper>
            {type ? (
              <BarcodeScannerComponent
                onUpdate={async (_, result) => {
                  if (!result?.getText()) return;

                  await handleBarcodeScanned('5000159559348');
                  setStep(2);
                }}
              />
            ) : (
              <Webcam
                ref={webcamRef}
                audio={false}
                screenshotFormat='image/png'
                videoConstraints={{
                  facingMode: 'environment',
                }}
              />
            )}
            <S.TypeButton onClick={() => setType((prev) => !prev)}>
              <S.TypeImg src={type ? barcode : camera1} />
            </S.TypeButton>
          </S.ScannerWrapper>
        )}
        {!type && step === 1 && (
          <S.CameraButton onClick={handleShotButtonClick} />
        )}

        {step === 2 && (
          <>
            <S.Title>
              {response?.productDto?.productName
                ? response.productDto.productName
                : '순두부찌개'}
            </S.Title>
            <S.ProductImg
              src={
                response?.productDto?.productImg
                  ? response.productDto.productImg
                  : 'https://recipe1.ezmember.co.kr/cache/recipe/2019/03/01/cbdcad39283af740afd0e08f97849c7c1.jpg'
              }
            />
            <S.FoodInfoBox>
              <S.AllergyBox>
                {response?.allergy?.map((allergy: string) => (
                  <AllergyDialog type='warning' allergy={allergy} />
                ))}
                {response?.warring?.map((allergy: string) => (
                  <AllergyDialog type='notice' allergy={allergy} />
                ))}
              </S.AllergyBox>
              {response?.productDto?.protein && (
                <S.ProgressBarWrapper>
                  <S.Wrapper>
                    <S.ProgressBarText>
                      <S.Name>단백질</S.Name>
                      <S.Percent>{response.productDto.protein}%</S.Percent>
                    </S.ProgressBarText>
                    <ProgressBar progress={response.productDto.protein} />
                  </S.Wrapper>
                  <S.Wrapper>
                    <S.ProgressBarText>
                      <S.Name>지방</S.Name>
                      <S.Percent>{response.productDto.province}%</S.Percent>
                    </S.ProgressBarText>
                    <ProgressBar progress={response.productDto.province} />
                  </S.Wrapper>
                  <S.Wrapper>
                    <S.ProgressBarText>
                      <S.Name>탄수화물</S.Name>
                      <S.Percent>{response.productDto.carbohydrate}%</S.Percent>
                    </S.ProgressBarText>
                    <ProgressBar progress={response.productDto.carbohydrate} />
                  </S.Wrapper>
                  <S.Wrapper>
                    <S.ProgressBarText>
                      <S.Name>당류</S.Name>
                      <S.Percent>{response.productDto.sugar}%</S.Percent>
                    </S.ProgressBarText>
                    <ProgressBar progress={response.productDto.sugar} />
                  </S.Wrapper>
                  <S.Wrapper>
                    <S.ProgressBarText>
                      <S.Name>나트륨</S.Name>
                      <S.Percent>{response.productDto.sodium}%</S.Percent>
                    </S.ProgressBarText>
                    <ProgressBar progress={response.productDto.sodium} />
                  </S.Wrapper>
                  <S.Wrapper>
                    <S.ProgressBarText>
                      <S.Name>콜레스테롤</S.Name>
                      <S.Percent>{response.productDto.cholesterol}%</S.Percent>
                    </S.ProgressBarText>
                    <ProgressBar progress={response.productDto.cholesterol} />
                  </S.Wrapper>
                  <S.Wrapper>
                    <S.ProgressBarText>
                      <S.Name>포화지방</S.Name>
                      <S.Percent>{response.productDto.pfat}%</S.Percent>
                    </S.ProgressBarText>
                    <ProgressBar progress={response.productDto.pfat} />
                  </S.Wrapper>
                  <S.Wrapper>
                    <S.ProgressBarText>
                      <S.Name>트렌스지방</S.Name>
                      <S.Percent>{response.productDto.tfat}%</S.Percent>
                    </S.ProgressBarText>
                    <ProgressBar progress={response.productDto.tfat} />
                  </S.Wrapper>
                </S.ProgressBarWrapper>
              )}
            </S.FoodInfoBox>
          </>
        )}
      </S.Container>
    </>
  );
};

export default CameraPage;
