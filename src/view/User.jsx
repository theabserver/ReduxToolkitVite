import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../slices/UserSlice";
export const User = () => {
  const user = useSelector((state) => state.user); // user state
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  debugger;
  return (
    <>
      <div>User</div>
      {user.loading ? <div>Loading Users</div> : null}
      {!user.loading && user.error.length ? <div>{user.error}</div> : null}
      {!user.error && !user.loading ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
};
