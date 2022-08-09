import { expect } from '@jest/globals';
import { getServersLocations } from '../utils/getServersLocations';

const mockedServers = Array(10)
  .fill(null)
  .map((_, i) => ({
    name: `Test-Name-${i % 2}`,
    distance: Math.floor(Math.random() * 10000),
  }));

describe('format locations function', () => {
  it('properly combines locations with given server list', () => {
    expect(getServersLocations(mockedServers)).toHaveLength(2);
    expect(getServersLocations(mockedServers)).toEqual([
      ['Test-Name-0', 5],
      ['Test-Name-1', 5],
    ]);
  });
});
