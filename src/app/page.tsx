export const revalidate = 0; // This is to disable the Nextjs caching behavior.
import { AuthToken } from 'semaphor';
import DashboardComponent from './components/dashboard-component';
import { postRequest } from '@/server-utils';

const DASHBOARD_ID = 'd_a1a5275b-5ded-411c-a2bb-bfafd55e7b26'; // Replace with your actual dashboard ID
const DASHBOARD_SECRET = 'ds_13353da5-e413-46cb-a8af-fd58192aab11'; // Replace with your actual dashboard secret
const TOKEN_URL = 'https://semaphor.cloud/api/v1/token';

export default async function HomePage() {
  const token = await postRequest<AuthToken>(TOKEN_URL, {
    dashboardId: DASHBOARD_ID,
    dashboardSecret: DASHBOARD_SECRET,
  });

  return <DashboardComponent authToken={token} />;
}
