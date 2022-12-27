import PropTypes from 'prop-types';
import { Heading } from './MainTitle.styled';

export const MainTitle = ({ title }) => {
  return <Heading>{title}</Heading>;
};

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
