import { Button, Input, Form, Typography } from 'antd';

import * as S from './styles';

const LpForm = () => {
  return (
    <S.Wrapper>
      <Typography.Title level={5}>
        Se Inscreva e Aprenda a Como se Tornar um Produtor Profissional em
        aproximadamente 6 meses.
      </Typography.Title>
      <strong>100% Online e Gratuito.</strong>

      <Form action="https://paginas.rocks/pages/index/472323" method="post">
        <Input id="id" name="id" type="hidden" value="472323" />
        <Input id="mid" name="mid" type="hidden" value="472323" />
        <Input id="pid" name="pid" type="hidden" value="16774321" />
        <Input id="list_id" name="list_id" type="hidden" value="472323" />
        <Input id="provider" name="provider" type="hidden" value="leadlovers" />
        <Form.Item style={{ marginBottom: '0.8rem' }}>
          <label htmlFor="name">Nome:</label>
          <Input
            size="small"
            id="name"
            name="name"
            placeholder="Digite seu primeiro nome"
            type="text"
            required
          />
        </Form.Item>
        <Form.Item style={{ marginBottom: '0.8rem' }}>
          <label htmlFor="email">E-mail:</label>
          <Input
            size="small"
            id="email"
            name="email"
            placeholder="Digite seu melhor e-mail"
            type="email"
            required
          />
        </Form.Item>
        <Form.Item>
          <label htmlFor="phone">
            WhatsApp <span>(Opcional)</span>:
          </label>
          <Input
            size="small"
            id="phone"
            name="phone"
            placeholder="Digite seu WhatsApp com DDD (Opcional)"
            type="text"
          />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          INSCREVA-SE GRATUITAMENTE
        </Button>
        <Input type="hidden" id="source" name="source" value="" />
      </Form>
    </S.Wrapper>
  );
};

export default LpForm;
