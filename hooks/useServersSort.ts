import { useEffect, useState } from 'react';
import { ServerType } from '../types/server';

type SortType = 'name' | 'distance' | '';

export default function useServersSort(
  serversData: ServerType[],
  // eslint-disable-next-line no-unused-vars
  setServersData: (state: ServerType[]) => void,
  resetProp?: string
) {
  const [sortType, setSortType] = useState<SortType>('');

  useEffect(() => {
    setSortType('');
  }, [resetProp]);

  const handleServerNameSort = () => {
    const padName = (name: string) => {
      const sName = name.split('#');
      sName[1] = String(sName[1]).padStart(4, '0');
      return sName.join('#');
    };

    if (sortType === 'name') {
      const reversedServers = [...serversData.reverse()];
      setServersData(reversedServers);
    } else {
      setSortType('name');
      const sortedServers = serversData.sort((a, b) => {
        const aName = padName(a.name);
        const bName = padName(b.name);
        return aName.localeCompare(bName);
      });
      setServersData(sortedServers);
    }
  };

  const handleDistanceSort = () => {
    if (sortType === 'distance') {
      const reversedServers = [...serversData.reverse()];
      setServersData(reversedServers);
    } else {
      setSortType('distance');
      const sortedServers = serversData.sort((a, b) => a.distance - b.distance);
      setServersData(sortedServers);
    }
  };

  return {
    handleServerNameSort,
    handleDistanceSort,
  };
}
