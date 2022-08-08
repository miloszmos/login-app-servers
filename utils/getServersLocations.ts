import { ServerType } from '../types/server';

type ReducedLocationsType = {
  [key: string]: number;
};

export const getServersLocations = (servers: ServerType[]) => {
  return Object.entries(
    servers.reduce<ReducedLocationsType>((acc, curr) => {
      const location = curr.name.split(' #')[0];
      if (acc[location]) {
        return {
          ...acc,
          [location]: acc[location] + 1,
        };
      }
      return {
        ...acc,
        [location]: 1,
      };
    }, {})
  );
};
