export function formatCEP(CEP: number) {
  const cep = String(CEP);
  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
}

export function formatPrice(Price: number) {
  const price = 'R$ ' + String(Price) + 0;
  return price.replace('.', ',');
}

export function formatCPF(CPF: number) {
  const cpf = String(CPF);
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

import moment from 'moment';

export function formatDate(date: string) {
  const formatedDate = moment(date).format('DD/MM/YYYY');
  return formatedDate;
}

export function formatDateHour(date: string) {
  const formatedDate = moment(date).format('DD/MM/YYYY [às] HH:mm:ss');
  return formatedDate;
}

export function formatPayment(metodo_pagamento: string) {
  const updatedPayment =
    metodo_pagamento === 'cartao_de_credito'
      ? 'Cartão de Crédito'
      : metodo_pagamento === 'boleto'
      ? 'Boleto'
      : '';
  return updatedPayment;
}

export function formatPhone(Phone: number) {
  const phone = String(Phone);
  if (phone.length === 10) {
    return phone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  if (phone.length === 11) {
    return phone.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
  }
}
