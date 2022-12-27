import PropTypes from 'prop-types';
import { Heading } from './Title.styled';

export const Title = ({ title }) => {
  return <Heading>{title}</Heading>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
