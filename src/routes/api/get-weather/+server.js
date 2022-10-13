// import { json } from '@sveltejs/kit';

export async function GET(event) {
   console.log(event);
   return new Response({
        location: {
          name: 'Asunción',
          region: 'Central',
          country: 'Paraguay',
        }
   });
}