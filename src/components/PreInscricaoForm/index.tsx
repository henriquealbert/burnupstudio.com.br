import { Button, Form, Input } from 'antd';

import * as S from './styles';

const PreInscricaoForm = () => {
  return (
    <S.Wrapper>
      <form
        action="https://paginas.rocks/pages/index/482815"
        method="post"
        target="_blank"
      >
        <Input id="id" name="id" type="hidden" value="482815" />
        <Input id="mid" name="mid" type="hidden" value="482815" />
        <Input id="pid" name="pid" type="hidden" value="17038085" />
        <Input id="list_id" name="list_id" type="hidden" value="482815" />
        <Input id="provider" name="provider" type="hidden" value="leadlovers" />
        <Form.Item>
          <label htmlFor="name">
            Nome<strong>*</strong>:
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Informe o seu primeiro nome"
            type="text"
            required
          />
        </Form.Item>
        <Form.Item>
          <label htmlFor="email">
            E-mail<strong>*</strong>:
          </label>
          <Input
            id="email"
            name="email"
            placeholder="Informe o seu melhor e-mail"
            type="email"
            required
          />
        </Form.Item>
        <Form.Item>
          <label htmlFor="phone">
            WhatsApp com DDD <span>(Opcional)</span>:
          </label>
          <Input
            id="phone"
            name="phone"
            placeholder="Informe o seu WhatsApp com DDD"
            type="text"
            defaultValue={' '}
          />
        </Form.Item>
        <Button type="default" htmlType="submit" block>
          Quero Entrar na Lista Vip de Espera
        </Button>
        <Input type="hidden" id="source" name="source" value="" />
      </form>
    </S.Wrapper>
  );
};

export default PreInscricaoForm;
