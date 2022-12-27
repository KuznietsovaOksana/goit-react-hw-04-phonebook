import PropTypes from 'prop-types';
import { List, Item, Text, Button } from './ContactList.styled';

export const ContactList = ({ data, deleteContact }) => {
  return (
    <List>
      {data.map(({ id, name, number }) => (
        <Item key={id}>
          <Text>
            {name}: {number}{' '}
          </Text>
          <Button type="button" onClick={() => deleteContact(id)}>
            delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
