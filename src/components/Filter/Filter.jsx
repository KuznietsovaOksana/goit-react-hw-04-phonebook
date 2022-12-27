import PropTypes from 'prop-types';
import { Input, Text } from './Filter.styled';

export const Filter = ({ onInputChange }) => {
  return (
    <>
      <Text>Who would you like to find?</Text>
      <Input type="text" onChange={onInputChange} />
    </>
  );
};

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};
