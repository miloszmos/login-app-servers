import cookie from 'cookie';
import type { GetServerSideProps } from 'next';
import Checkbox from '../components/atoms/Checkbox';
import Table from '../components/molecules/Table/Table';
import ButtonSort from '../components/atoms/buttons/ButtonSort';
import TableHead from '../components/molecules/Table/TableHead';
import useServersSort from '../hooks/useServersSort';
import { ReactElement } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { getServersLocations } from '../utils/getServersLocations';
import { ServerType } from '../types/server';

const API_ENDPOINT = 'https://playground.tesonet.lt/v1';

type ServerLocationType = [string, number];
interface HomePageProps {
  servers: ServerType[];
  serversLocations: ServerLocationType[];
}

const HomePage = ({ servers, serversLocations }: HomePageProps) => {
  const {
    sorted,
    location,
    handleDistanceSort,
    handleSelectLocation,
    handleServerNameSort,
  } = useServersSort(servers);

  return (
    <>
      <section className="flex flex-col sm:flex-row justify-center my-5 md:my-20 px-6 sm:px-10">
        <div className="flex-col items-center">
          <div className="overflow-x-auto relative shadow-md rounded-lg">
            <ServersLocationsTable
              serversLocations={serversLocations}
              handleSelectLocation={handleSelectLocation}
              location={location}
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 sm:mt-0 sm:ml-5 md:ml-10">
          <div className="overflow-x-auto relative shadow-md rounded-lg">
            <ServersTabable
              data={sorted?.data || servers}
              handleDistanceSort={handleDistanceSort}
              handleServerNameSort={handleServerNameSort}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { ['token']: token } = cookie.parse(req.headers.cookie || '');

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };
  }

  const response = await fetch(`${API_ENDPOINT}/servers`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const servers: ServerType[] = await response.json();

  const serversLocations = getServersLocations(servers);

  return {
    props: {
      servers,
      serversLocations,
    },
  };
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default HomePage;

const ServersTabable = ({
  data,
  handleServerNameSort,
  handleDistanceSort,
}: {
  data: ServerType[];
  handleServerNameSort: () => void;
  handleDistanceSort: () => void;
}) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <th scope="col" className="py-3 pl-4 pr-4 md:pr-8 lg:pr-12">
            Server name
            <ButtonSort name="name" onClick={handleServerNameSort} />
          </th>
          <th scope="col" className="py-3 p-2 md:px-6 lg:px-8 text-center">
            Distance
            <ButtonSort name="distance" onClick={handleDistanceSort} />
          </th>
        </tr>
      </TableHead>
      <tbody>
        {data.map(({ name, distance }, i) => (
          <tr className="bg-white border-b" key={`${name}-${i}`}>
            <th
              scope="row"
              className="py-4 font-medium pl-4 text-gray-900 whitespace-nowrap"
            >
              {name}
            </th>
            <td className="py-4 text-center">{distance}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const ServersLocationsTable = ({
  location,
  serversLocations,
  handleSelectLocation,
}: {
  location: string;
  serversLocations: ServerLocationType[];
  // eslint-disable-next-line no-unused-vars
  handleSelectLocation: (_loc: string) => void;
}) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <th scope="col" className="py-3 px-4 md:px-5">
            Location
          </th>
          <th scope="col" className="py-3 px-2 text-center">
            Count
          </th>
          <th scope="col" className="py-3 px-3 text-center">
            Select
          </th>
        </tr>
      </TableHead>
      <tbody>
        {serversLocations.map(([name, count], i) => (
          <tr className="bg-white border-b" key={`${name}-${i}`}>
            <th
              scope="row"
              className="py-4 font-medium text-gray-900 whitespace-nowrap pl-4 pr-2 md:px-5"
            >
              {name}
            </th>
            <td className="py-4 text-center">{count}</td>
            <td className="py-4 text-center">
              <Checkbox
                name={name}
                identity={`checkbox-${i}-${count}`}
                checked={location === name}
                onChange={() => handleSelectLocation(name)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
