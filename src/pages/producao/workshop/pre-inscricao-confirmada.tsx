import Header from 'components/Header';
import Head from 'next/head';
import PreInscricaoConfirmadaScreen from 'components/screens/PreInscricaoConfirmadaScreen';

export default function PreInscricaoConfirmada() {
  return (
    <>
      <Head>
        <title>Pré-Inscrição Confirmada no Curso Completo</title>
      </Head>
      <Header />
      <PreInscricaoConfirmadaScreen />
    </>
  );
}
