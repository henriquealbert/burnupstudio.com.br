import FacebookComents from 'components/FacebookComents';
import HeroWorkshop3 from 'components/HeroWorkshop3';
import TestmonialsSidebar from 'components/TestmonialsSidebar';
import * as S from './styles';

const Cpl3 = () => {
  return (
    <S.Wrapper>
      <HeroWorkshop3 />
      <S.BottomSection>
        <FacebookComents />
        <TestmonialsSidebar />
      </S.BottomSection>
    </S.Wrapper>
  );
};

export default Cpl3;
