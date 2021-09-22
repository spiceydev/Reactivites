import { useField } from 'formik';
import { Form, Label } from 'semantic-ui-react';

interface MyTextAreaProps {
  placeholder: string;
  name: string;
  rows: number;
  label?: string;
}
const MyTextArea = (props: MyTextAreaProps) => {
  const [field, meta] = useField(props.name);

  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <label>{props.label}</label>
      <textarea {...field} {...props} />
      {meta.touched && meta.error ? (
        <Label pointing color="red">
          {meta.error}
        </Label>
      ) : null}
    </Form.Field>
  );
};

export default MyTextArea;
