import { chakra, Container } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { api } from './api';
import { Prisma, User } from './prisma';

function App() {
  const [userInput] = useState<Prisma.UserWhereUniqueInput>({
    username: 'mthellams',
  });
  const { data } = useQuery<User, Error>({
    queryKey: ['hello'],
    async queryFn() {
      return api.post('/users/unique', userInput).then(({ data }) => data);
    },
  });
  return (
    <>
      <Container mt="16" maxW="container.sm">
        {data ? (
          <chakra.pre fontSize="2xl">
            {JSON.stringify(data, null, 2)}
          </chakra.pre>
        ) : null}
      </Container>
    </>
  );
}

export default App;
