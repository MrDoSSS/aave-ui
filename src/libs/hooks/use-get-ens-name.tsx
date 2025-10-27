import { useState } from 'react';

const useGetEnsName = (address: string) => {
  const [ensName] = useState<string | null>(null);

  return { ensName };
};

export default useGetEnsName;
