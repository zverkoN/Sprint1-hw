type AddressType = {
  street: string;
  city: string;
};

type UserType = {
  id: number;
  name: string;
  age: number;
  address:AddressType
};

type UserListPropsType = {
  users: UserType[];
};

export const UserList = ({users}: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>
        {users.map(({name, id, age, address}) => (
          <li key={id} id={`hw01-user-${id}`}>
            <strong>{name}</strong> (Age: {age})<strong> Address:</strong>
            {address.street}, {address.city}
          </li>
        ))}
      </ul>
    </div>
  );
};
