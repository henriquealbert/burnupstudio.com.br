import { useState } from 'react';
import { Modal, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

export type ModalProps = {
  buttonText: string;
  title: string;
  children: React.ReactNode;
};

const MyModal = ({ buttonText, title, children }: ModalProps) => {
  const [visible, setVisible] = useState(false);

  function showModal() {
    setVisible(true);
  }

  function handleOk() {
    setVisible(false);
  }

  function handleCancel() {
    setVisible(false);
  }

  return (
    <div>
      <Button type="primary" onClick={showModal} size="large">
        <span>
          {buttonText} <ArrowRightOutlined />
        </span>
      </Button>
      <Modal
        title={title}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={''}
      >
        {children}
      </Modal>
    </div>
  );
};

export default MyModal;
