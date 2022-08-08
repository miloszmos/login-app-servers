import { useEffect, useState } from 'react';
import { ServerType } from '../types/server';

type SortedServers = {
  data: ServerType[];
  type: 'name' | 'distance';
};

export default function useServersSort(servers: ServerType[]) {
  const [location, setLocation] = useState<string>('');
  const [sorted, setSorted] = useState<SortedServers | null>();

  useEffect(() => {
    if (!location) {
      return setSorted({
        type: 'name',
        data: servers.sort((a, b) => a.name.localeCompare(b.name)),
      });
    }
    const data = servers.filter((s) => s.name.includes(location));
    if (sorted) {
      return setSorted({
        ...sorted,
        data,
      });
    }
    setSorted({
      type: 'name',
      data: data.sort((a, b) => a.name.localeCompare(b.name)),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const handleServerNameSort = () => {
    if (sorted?.type === 'name') {
      const data = [...sorted.data.reverse()];
      return setSorted({
        ...sorted,
        data,
      });
    }
    if (sorted?.type === 'distance') {
      const data = sorted.data.sort((a, b) => a.name.localeCompare(b.name));
      return setSorted({
        type: 'name',
        data,
      });
    }
    setSorted({
      type: 'name',
      data: servers.sort((a, b) => a.name.localeCompare(b.name)),
    });
  };

  const handleDistanceSort = () => {
    if (sorted?.type === 'name') {
      const data = sorted.data.sort((a, b) => a.distance - b.distance);
      return setSorted({
        type: 'distance',
        data,
      });
    }
    if (sorted?.type === 'distance') {
      const data = [...sorted.data.reverse()];
      return setSorted({
        ...sorted,
        data,
      });
    }
    setSorted({
      type: 'distance',
      data: servers.sort((a, b) => a.distance - b.distance),
    });
  };

  const handleSelectLocation = (loc: string) =>
    location === loc ? setLocation('') : setLocation(loc);

  return {
    sorted,
    location,
    handleSelectLocation,
    handleServerNameSort,
    handleDistanceSort,
  };
}
