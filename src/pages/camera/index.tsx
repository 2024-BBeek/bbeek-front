import { useCallback, useRef, useState } from 'react';
import * as S from './style';

import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import Webcam from 'react-webcam';
import { Header } from '@/components';
import { camera1, barcode } from '@/assets';

const CameraPage = () => {
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
            <S.CameraButton />
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
                  <S.AllergyAlert type={'empty'}>
                    <S.AllergyHeader>❗{'알레르기 주의'}</S.AllergyHeader>이
                    제품은 {'알러지 종류'} 알레르기 성분을 포함하고 있습니다.
                  </S.AllergyAlert>
                ))}
              </S.AllergyBox>
            </S.FoodInfoBox>
          </>
        )}
      </S.Container>
    </>
  );
};

export default CameraPage;
