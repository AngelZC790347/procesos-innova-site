import React from "react";
import {ListGroup,ListGroupItem , ListGroupItemText,ListGroupItemHeading} from 'reactstrap';

const ListaFromArray = (props)=>{
    let listaItems = [];
    props.Items.forEach(element => {
        listaItems.push(<li numbered>
            {element}
        </li>);
    });
    return(
        <ListGroup>
            <ListGroupItem  color="#92BF5F"> 
                <ListGroupItemHeading>{props.ItemTittle}</ListGroupItemHeading>
                <ListGroupItemText>
                    <ListGroup numbered>{listaItems}</ListGroup>
                </ListGroupItemText>
            </ListGroupItem>
        </ListGroup>
    )
}

export default ListaFromArray;
