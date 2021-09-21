import { observer } from 'mobx-react-lite';
import { FC, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import ActivityFilters from './ActivityFilters';
import ActivityList from './ActivityList';

interface ActivityDashboardProps {}

const ActivityDashboard: FC<ActivityDashboardProps> = () => {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry } = activityStore;

  useEffect(() => {
    if (activityRegistry.size <= 1) {
      loadActivities();
    }
  }, [loadActivities, activityRegistry]);

  if (activityStore.loadingInitial) {
    return <LoadingComponent content="Loading..." />;
  }

  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList />
      </Grid.Column>
      <Grid.Column width="6">
        <ActivityFilters />
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard);
