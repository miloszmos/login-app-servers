import { useEffect, useState } from 'react';
import { ServerType } from '../types/server';

export default function useFilteredData(
  servers: ServerType[],
  // eslint-disable-next-line no-unused-vars
  setServersData: (state: ServerType[]) => void
) {
  const [location, setLocation] = useState<string>('');

  useEffect(() => {
    if (location === '') {
      setServersData(servers);
    } else {
      const data = [...servers.filter((s) => s.name.includes(location))];
      setServersData(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const handleSelectLocation = async (loc: string) => {
    if (location === loc) {
      setLocation('');
    } else {
      setLocation(loc);
    }
  };

  return {
    location,
    handleSelectLocation,
  };
}
