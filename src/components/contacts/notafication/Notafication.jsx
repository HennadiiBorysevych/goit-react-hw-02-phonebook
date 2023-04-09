import PropTypes from 'prop-types';
import { NotaficationBox, NotaficationText } from './Notafication.styled';

const Notification = ({ message }) => {
  return (
    <NotaficationBox>
      <NotaficationText>{message}</NotaficationText>
    </NotaficationBox>
  );
};
export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
