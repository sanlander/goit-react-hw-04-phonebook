import {
  Item,
  DeleteBtn,
  ListItems,
  ItemNumber,
  InfoItems,
} from './ContactsList.modules';

export const ContactsList = ({ contacts, onClickDelete }) => {
  let numberItems = 0;
  return (
    <div>
      <ListItems>
        {contacts.map(({ id, name, number }) => {
          numberItems += 1;
          return (
            <Item key={id}>
              <InfoItems>
                <ItemNumber>{numberItems}</ItemNumber>
                {name}, tel: {number}
              </InfoItems>
              <DeleteBtn type="button" onClick={() => onClickDelete(id)}>
                Delete
              </DeleteBtn>
            </Item>
          );
        })}
      </ListItems>
    </div>
  );
};
