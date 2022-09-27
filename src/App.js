import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./features/UsersSlice";

export default function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.data);
  console.log("userlist", userList);
  const [userInfo, setUserInfo] = useState({
    name: "",
    userName: "",
    newUserName: ""
  });

  const changeUserInfo = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      {" "}
      <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
          name="name"
          onChange={changeUserInfo}
        />
        <input
          type="text"
          placeholder="Username..."
          name="userName"
          onChange={changeUserInfo}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name: userInfo.name,
                username: userInfo.userName
              })
            );
          }}
        >
          {" "}
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <h2> {user.username}</h2>
              <input
                type="text"
                placeholder="New username..."
                name="newUserName"
                onChange={changeUserInfo}
              />
              <button
                onClick={() => {
                  dispatch(
                    updateUsername({
                      id: user.id,
                      username: userInfo.newUserName
                    })
                  );
                }}
              >
                Update Username
              </button>
              <button
                onClick={() =>
                  dispatch(
                    deleteUser({
                      id: user.id
                    })
                  )
                }
              >
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
