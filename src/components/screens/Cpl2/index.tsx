import FacebookComents from 'components/FacebookComents';
import HeroWorkshop2 from 'components/HeroWorkshop2';
import TestmonialsSidebar from 'components/TestmonialsSidebar';
import * as S from './styles';

const Cpl2 = () => {
  return (
    <S.Wrapper>
      <HeroWorkshop2 />
      <S.BottomSection>
        <FacebookComents />
        <TestmonialsSidebar />
      </S.BottomSection>
    </S.Wrapper>
  );
};

export default Cpl2;
