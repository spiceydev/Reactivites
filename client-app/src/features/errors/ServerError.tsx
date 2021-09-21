import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';

interface ServerErrorProps {}
const ServerError: FC<ServerErrorProps> = () => {
  const { commonStore } = useStore();
  return (
    <Container>
      <Header as="h1" content="Server Error" />
      <Header sub as="h5" color="red" content={commonStore.error?.message} />
      {commonStore.error?.details && (
        <Segment>
          <Header as="h4" content="Stack trace" color="teal" />
          <code className="stack">{commonStore.error.details}</code>
        </Segment>
      )}
    </Container>
  );
};

export default observer(ServerError);
