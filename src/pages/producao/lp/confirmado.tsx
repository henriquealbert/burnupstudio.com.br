import Header from 'components/Header';
import LandingPageConfirmado from 'components/screens/LandingPageConfirmado';
import Head from 'next/head';

export default function LPConfirmado() {
  return (
    <>
      <Head>
        <title>Inscrição Confirmada! - Burn Up Studio</title>
      </Head>
      <Header />

      <LandingPageConfirmado />
    </>
  );
}
