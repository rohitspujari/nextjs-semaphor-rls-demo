export const revalidate = 0; // This is to disable the Nextjs caching behavior.
import { AuthToken } from 'semaphor';
import DashboardComponent from './components/dashboard-component';
import { postRequest } from '@/server-utils';
import NavBar from './components/nav-bar';

const DASHBOARD_ID = 'd_a1a5275b-5ded-411c-a2bb-bfafd55e7b26'; // Replace with your actual dashboard ID
const DASHBOARD_SECRET = 'ds_13353da5-e413-46cb-a8af-fd58192aab11'; // Replace with your actual dashboard secret
const TOKEN_URL = 'https://semaphor.cloud/api/v1/token';

export default async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const tenant = searchParams.tenant as string | undefined;
  let states: string[] = [];

  switch (tenant) {
    case 'a':
      states = ['New York', 'Connecticut', 'Florida'];
      break;
    case 'b':
      states = ['Texas', 'Illinois', 'Ohio'];
      break;
    case 'c':
      states = ['California', 'Nevada', 'Washington'];
      break;
    default:
      states = [];
      break;
  }

  const rowPolicy = {
    name: 'states',
    params: {
      states,
    },
  };

  const token = await postRequest<AuthToken>(TOKEN_URL, {
    dashboardId: DASHBOARD_ID,
    dashboardSecret: DASHBOARD_SECRET,
    rcls: states.length > 1 ? [rowPolicy] : [], // only pass the row policy if there are multiple states
  });

  return (
    <div>
      <NavBar />
      <DashboardComponent key={token.accessToken} authToken={token} />;
    </div>
  );
}
