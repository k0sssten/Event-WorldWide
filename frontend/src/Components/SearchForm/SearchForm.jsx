import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getEventsByParams, setAllByParams } from '../../redux/actions/eventfull';

function SearchForm() {
  const [componentSize, setComponentSize] = useState('large');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const dispatch = useDispatch()


  const submitHandler = (formData) => {
    dispatch(getEventsByParams(formData))
    // придумать как очищать форму после отправки данных
    // setTodoInput('')
  }


  return (
    <>
      <Form
      onFinish={submitHandler}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >

        <Form.Item label="Страна" name='countryCode'>
          <Input />
        </Form.Item>
        <Form.Item label="Город" name='city'>
          <Input />
        </Form.Item>

        <Form.Item label="Категория" name='classificationName'>
          <Select>
            <Select.Option value="Sports">Спорт</Select.Option>
            <Select.Option value="Music">Музыка</Select.Option>
            <Select.Option value="Arts & Theatre">Исскуство и театр</Select.Option>
            <Select.Option value="Miscellaneous">Разное</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Дата" name='startDateTime'>
          <DatePicker />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit">Найти</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SearchForm;
