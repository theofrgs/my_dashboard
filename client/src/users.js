import React from 'react';

function getUsers() {
  fetch(`/api/users`)
  .then((response) => response.json())
  .then(users => console.log(users));
}

export function users() {
  return (
    <div>
        test users
      {getUsers()}
    </div>
  );
}