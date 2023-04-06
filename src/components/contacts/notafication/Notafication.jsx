import { NotaficationBox, NotaficationText } from './Notafication.styled';
const Notification = ({ message }) => {
  return (
    <NotaficationBox>
      <NotaficationText>{message}</NotaficationText>
    </NotaficationBox>
  );
};
export default Notification;
