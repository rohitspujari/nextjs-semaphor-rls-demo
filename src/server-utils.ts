'use server';
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
