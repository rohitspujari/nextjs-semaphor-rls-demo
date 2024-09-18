export const revalidate = 0; // This is to disable the Nextjs caching behavior.
import { AuthToken } from 'semaphor';
import DashboardComponent from './components/dashboard-component';

const DASHBOARD_ID = 'd_cf007a8b-19bc-46ad-8787-2915445b7b86'; // Replace with your actual dashboard ID
const DASHBOARD_SECRET = 'ds_f32f0b30-b7e1-40f9-ba6a-9804a5b9d635'; // Replace with your actual dashboard secret
const TOKEN_URL = 'https://semaphor.cloud/api/v1/token';

export async function postRequest<T>(
  url: string,
  data: Record<string, any> = {}
): Promise<T> {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error(
        `Error: ${response.status} - ${response.statusText}`,
        errorResponse
      );
      throw new Error(`Request failed with status ${response.status}`);
    }

    const jsonResponse: T = await response.json();
    return jsonResponse;
  } catch (error) {
    console.error('Network or processing error:', error);
    throw error;
  }
}

export default async function HomePage() {
  const token = await postRequest<AuthToken>(TOKEN_URL, {
    dashboardId: DASHBOARD_ID,
    dashboardSecret: DASHBOARD_SECRET,
  });

  return <DashboardComponent authToken={token} />;
}
