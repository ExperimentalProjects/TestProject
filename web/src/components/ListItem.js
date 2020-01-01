import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Weather from './Weather';



const ListItem = (props) => {
    const isItSelected = props.index === props.selectedItem
    return (
        <Container>
            <ListItemContainer onClick={props.onSelect}>
                <MediumText>{props.city}</MediumText>
            </ListItemContainer>
            {isItSelected &&
                <Weather {...props} />
            }

        </Container>
    )
}


export default ListItem

const Container = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
  width: 100%;
`

const ListItemContainer = styled.div`
 display: flex;
 flex:1;
 flex-direction: row;
 justify-content: space-between;
 box-shadow: -2px -2px 15px 3px #dedada;
 border-radius: 4px;
 margin: 10px;
 padding: 10px;
`

const MediumText = styled.h3`
    font-size: 25px,
    font-weight: 600;
    color: black;
`