import React from "react";
import { RiCheckboxCircleLine, RiCheckboxBlankCircleLine, RiErrorWarningLine } from 'react-icons/ri';
import moment from 'moment';
moment.locale('en-gb');

const itemIsOverDue = (dueDate) => {
  return moment().isAfter(dueDate);
}

const ListItem = (props) => {
  return (
    <li>
      <p>
        {props.completed ? <s>{props.text}</s> : props.text}
        <span>
          {props.completed ? <RiCheckboxCircleLine /> : null}
        </span>
        <span>
          {!props.completed && itemIsOverDue(props.dueDate) ? <RiErrorWarningLine /> : null}
        </span>
        <span>
          {!props.completed && !itemIsOverDue(props.dueDate) ? <RiCheckboxBlankCircleLine /> : null}
        </span>
      </p>
    </li>
  )
}

export default ListItem;