import React from 'react';

import {
  fetchUsersFromApi,
  useSetUsersApi,
  useUsersApi,
} from '../contexts/users-api-context';

function ShowUsers() {
  const users = useUsersApi();
  const setUsersApiFun = useSetUsersApi();

  function handleApi() {
    fetchUsersFromApi(setUsersApiFun, users);
  }

  return (
    <div>
      <button onClick={handleApi}>загрузка юзеров</button>
      <div>{users ? users.map((u) => <p>{u.first_name}</p>) : null}</div>
    </div>
  );
}

export default ShowUsers;
