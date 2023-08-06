import { Container, Heading } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { api } from './api';

function App() {
  const { data } = useQuery<string, Error>({
    queryKey: ['hello'],
    async queryFn() {
      return api.get('').then(({ data }) => data);
    },
  });
  return (
    <>
      <Container mt="16" maxW="container.sm">
        <Heading as="h1">{data}</Heading>
      </Container>
    </>
  );
}

export default App;
