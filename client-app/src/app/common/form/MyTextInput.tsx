import { useField } from 'formik';
import { Form, Label } from 'semantic-ui-react';

interface MyTextInputProps {
  placeholder: string;
  name: string;
  label?: string;
}
const MyTextInput = (props: MyTextInputProps) => {
  const [field, meta] = useField(props.name);

  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <label>{props.label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <Label pointing color="red">
          {meta.error}
        </Label>
      ) : null}
    </Form.Field>
  );
};

export default MyTextInput;
