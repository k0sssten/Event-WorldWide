import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { getEventsByKeyword } from '../../redux/actions/eventquick';


const QuickSearchForm = () => {
  const dispatch = useDispatch()



  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const submitHandler = (formData) => {
    dispatch(getEventsByKeyword(formData))
    // придумать как очищать форму после отправки данных
  }


  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={submitHandler}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Ключевое слово"
          name="keyword">
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button htmlType="submit">
            Найти
          </Button>
        </Form.Item>
      </Form>

    </>
  );
};

export default QuickSearchForm;
