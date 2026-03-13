import Head from 'next/head'
import Image from 'next/image'
import RestaurantList from '../components/RestaurantList';
import Container from '../components/styled/Container';

export default function Home({ restaurants }) {
  return (
    <Container maxWidth='80%'>
      <RestaurantList restaurants={restaurants}/>
    </Container>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://restaurant-api.dicoding.dev/list', {
    method: 'GET',
    headers: {
      // update with your user-agent
      'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36',
      Accept: 'application/json; charset=UTF-8',
    },
  });
  const {restaurants} = await response.json();
 
  return {
    props: {
      restaurants,
    },
  };
}