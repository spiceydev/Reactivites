import { FC } from 'react';
import { Message } from 'semantic-ui-react';

interface ValidationErrorsProps {
  errors: string[] | null;
}
const ValidationErrors: FC<ValidationErrorsProps> = ({ errors }) => {
  return (
    <Message error>
      {errors && (
        <Message.List>
          {errors.map((err: any, i) => (
            <Message.Item key={i}>{err}</Message.Item>
          ))}
        </Message.List>
      )}
    </Message>
  );
};

export default ValidationErrors;
