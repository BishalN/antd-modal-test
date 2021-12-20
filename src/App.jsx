import { Button, Modal, Input, Select, Space, Switch } from 'antd';
import 'antd/dist/antd.min.css';
import { useState } from 'react';

import CustomModal from './components/Modal';

const { Option } = Select;
const { TextArea } = Input;

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCustomModalClose = () => {
    setIsCustomModalOpen(false);
  };

  return (
    <div>
      <Button type='primary' onClick={showModal}>
        Open Modal
      </Button>
      <button onClick={() => setIsCustomModalOpen(true)}>
        Open custom modal
      </button>
      {isCustomModalOpen && (
        <CustomModal>
          <div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <InputWrapper>
                <LabelWithMargin id='item'>Field</LabelWithMargin>
                <select name='items' id='item' style={{ width: '100%' }}>
                  <option value='Empnumber'>Empnumber</option>
                  <option value='AnotherNumber'>AnotherNumber</option>
                  <option value='NextNumber'>NextNumber</option>
                </select>
              </InputWrapper>

              <InputWrapper>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <LabelWithMargin id='noth'>Operator</LabelWithMargin>
                  <input type='checkbox' name='operator' id='noth' />
                </div>
                <LabelWithMargin id='ise'>Not</LabelWithMargin>
                <select name='ises' id='ise'>
                  <option value='Is Equal to'>Is Equal to</option>
                  <option value='AnotherNumber'>AnotherNumber</option>
                  <option value='NextNumber'>NextNumber</option>
                </select>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <LabelWithMargin id='caseignore'>Ignore Case</LabelWithMargin>
                  <input type='checkbox' name='operator' id='caseignore' />
                </div>
              </InputWrapper>

              <InputWrapper>
                <LabelWithMargin id='value'>Value</LabelWithMargin>
                <input type='text' name='value' id='value' />
              </InputWrapper>

              <label htmlFor='cond' style={{ alignSelf: 'flex-start' }}>
                Condition Specified
              </label>
              <textarea
                name='conditions'
                id='cond'
                cols='40'
                rows='5'
              ></textarea>
            </div>

            <div
              style={{
                display: 'flex',
                marginTop: '5px',
                justifyContent: 'space-evenly',
              }}
            >
              <button onClick={handleCustomModalClose}>Save</button>
              <button onClick={handleCustomModalClose}>Restore</button>
              <button onClick={handleCustomModalClose}>Ok</button>
              <button onClick={handleCustomModalClose}>Cancel</button>
            </div>
          </div>
        </CustomModal>
      )}

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

export const LabelWithMargin = ({ children, id, marginValue = '5px' }) => {
  return (
    <label htmlFor={id} style={{ marginRight: marginValue, marginLeft: '5px' }}>
      {children}
    </label>
  );
};

export const InputWrapper = ({ children }) => {
  return <div style={{ display: 'flex', marginTop: '5px' }}>{children}</div>;
};
