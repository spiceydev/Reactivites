import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Item, Button, Label } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';

interface ActivityListItemProps {
  activity: Activity;
}

const ActivityListItem: FC<ActivityListItemProps> = ({ activity }) => {
  const [target, setTarget] = useState('');
  const { activityStore } = useStore();
  const { deleteActivity, loading } = activityStore;

  const handleActivityDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    const { name } = e.target as HTMLButtonElement;
    setTarget(name);
    deleteActivity(id);
  };

  return (
    <Item>
      <Item.Content>
        <Item.Header as="a">{activity.title}</Item.Header>
        <Item.Meta>{activity.date}</Item.Meta>
        <Item.Description>
          <div>{activity.description}</div>
          <div>
            {activity.city}, {activity.venue}
          </div>
        </Item.Description>
        <Item.Extra>
          <Button
            as={Link}
            to={`/activities/${activity.id}`}
            floated="right"
            content="View"
            color="blue"
          />
          <Button
            name={activity.id}
            floated="right"
            content="Delete"
            color="red"
            onClick={(e) => handleActivityDelete(e, activity.id)}
            loading={loading && target === activity.id}
          />
          <Label basic content={activity.category} />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default ActivityListItem;
