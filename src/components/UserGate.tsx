import React, { FC, useEffect } from 'react';

import { useXXXRoles } from '@/lib/useRoles';

const UserGate: FC = ({ children }) => {
  const [session, isLoading, mekker] = useXXXRoles();
  const role = mekker?.role;
  const token = session?.token;
  useEffect(() => {
    if (!isLoading && mekker?.role) {
      // setS(s => s + 1);
      console.log(
        JSON.stringify(
          {
            isLoading,
            organisationId: mekker?.organisationId,
            role: mekker?.role
          },
          null,
          4
        )
      );
    }
  }, [isLoading, mekker?.organisationId, mekker?.role]);
  return (
    <>
      {isLoading === true && <div>UserGate</div>}
      {isLoading === false && role !== undefined && <div>{children}</div>}
      {isLoading === false && role === undefined && <div>Nopes</div>}
    </>
  );
};

export default UserGate;
