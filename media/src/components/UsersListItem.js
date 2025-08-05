import { Fragment } from 'react/jsx-runtime';
import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store';
import { useThunk } from '../hooks/use-thunk';
import ExpandablePanel from './ExpandablePanel';

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);
  const handleClick = () => doRemoveUser(user);
  const header = (
    <Fragment>
      <Button loading={isLoading} onClick={handleClick} className='mr-3'>
        <GoTrashcan />
      </Button>
      {error && <div>Error removing user...</div>}
      {user.name}
    </Fragment>
  );

  return <ExpandablePanel header={header} children={'CONTENT'} />;
}

export default UsersListItem;
