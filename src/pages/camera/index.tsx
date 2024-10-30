import { useCallback, useRef, useState } from 'react';
import * as S from './style';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import Webcam from 'react-webcam';
import { AllergyDialog, Header } from '@/components';
import { camera1, barcode } from '@/assets';

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <S.ProgressBarContainer>
      <S.ProgressBarFill progress={progress} />
    </S.ProgressBarContainer>
  );
};

const CameraPage: React.FC = () => {
  const progressValues = [65, 40, 120, 48, 30, 10, 15, 37];
  const webcamRef = useRef<Webcam>(null);
  const [step, setStep] = useState<number>(1);
  const [type, setType] = useState<boolean>(true);
  const [photoUrl, setPhotoUrl] = useState<string>('');

  console.log(photoUrl);

  const getInfoByBarcode = (barcode: string) => {
    console.log(barcode);
    setStep(2);
  };

  const handleShotButtonClick = useCallback(() => {
    if (webcamRef.current) {
      const imageUrl = webcamRef.current.getScreenshot();
      setPhotoUrl(imageUrl!);
      setStep(2);
    }
  }, [webcamRef]);

  return (
    <>
      <Header />
      <S.Container>
        {step === 1 && (
          <S.ScannerWrapper>
            {type ? (
              <BarcodeScannerComponent
                onUpdate={(_, result) => {
                  if (!result?.getText()) return;
                  getInfoByBarcode(result?.getText());
                }}
              />
            ) : (
              <Webcam
                ref={webcamRef}
                audio={false}
                screenshotFormat='image/png'
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
            <S.Title>{'제품 이름'}</S.Title>
            <S.ProductImg src='' />
            <S.FoodInfoBox>
              <S.AllergyBox>
                {['hihi', 'fdasfd', 'fds'].map((_allergy) => (
                  <AllergyDialog type='notice' />
                ))}
              </S.AllergyBox>
              <S.ProgressBarWrapper>
                {progressValues.map((progress, index) => (
                  <S.Wrapper>
                    <S.ProgressBarText>
                      <S.Name>단백질</S.Name>
                      <S.Percent>65%</S.Percent>
                    </S.ProgressBarText>
                    <ProgressBar key={index} progress={progress} />
                  </S.Wrapper>
                ))}
              </S.ProgressBarWrapper>
            </S.FoodInfoBox>
          </>
        )}
      </S.Container>
    </>
  );
};

export default CameraPage;
