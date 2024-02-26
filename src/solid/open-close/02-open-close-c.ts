
export class HttpClient {
  async get ( url: string ) {
    const resp = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = resp.json();
    
    return { data, status: resp.status };
  }
}