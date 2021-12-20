import { Button, Modal, Input, Select, Space, Switch } from 'antd';
import 'antd/dist/antd.min.css';
import { useState } from 'react';

const { Option } = Select;
const { TextArea } = Input;

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type='primary' onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title='Report Query - BI annual Statement ..'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key='back' onClick={handleOk}>
            Save
          </Button>,
          <Button key='restore' onClick={handleOk}>
            Restore
          </Button>,
          <Button key='ok' onClick={handleOk}>
            Ok
          </Button>,
          <Button key='cancel'>Cancel</Button>,
        ]}
      >
        <Space direction='vertical'>
          <Space>
            Field
            <Select defaultValue='Empnumber' style={{ width: '100%' }}>
              <Option value='Empnumber'>Empnumber</Option>
              <Option value='OtherOptions'>OtherOptions</Option>
              <Option value='Another Options'>Another Options</Option>
              <Option value='Yet anohter one'>Yet anohter one</Option>
            </Select>
          </Space>
          <Space>
            Operator
            <Switch
              defaultChecked
              checkedChildren='Not'
              unCheckedChildren='Yes'
            />
            <Select defaultValue='Is Equal to'>
              <Option value='Is Equal to'>Is Equal to</Option>
              <Option value='OtherOptions'>OtherOptions</Option>
              <Option value='Another Options'>Another Options</Option>
              <Option value='Yet anohter one'>Yet anohter one</Option>
            </Select>
            Ignore Case
            <Switch checkedChildren='Not' unCheckedChildren='Yes' />
          </Space>
          <Input addonBefore='value' />
          Condition Specified
          <TextArea rows={4} />
        </Space>
      </Modal>
    </div>
  );
}

export default App;
