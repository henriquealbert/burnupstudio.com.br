import FacebookComents from 'components/FacebookComents';
import HeroWorkshop from 'components/HeroWorkshop';
import TestmonialsSidebar from 'components/TestmonialsSidebar';
import * as S from './styles';

const Cpl1 = () => {
  return (
    <S.Wrapper>
      <HeroWorkshop />
      <S.BottomSection>
        <FacebookComents />
        <TestmonialsSidebar />
      </S.BottomSection>
    </S.Wrapper>
  );
};

export default Cpl1;
