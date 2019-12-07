import React from 'react';
import {
  MdRadioButtonChecked,
  MdRadioButtonUnchecked,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoNav.scss';

const TodoNav = ({navItems, onNav}) => {

  return(
    <div className="TodoNav">
      {navItems.map((navItem) => {
        return(
          <div key={navItem.id} onClick={() => onNav(navItem.id)} className="nav">
            <div className={cn("checkbox", (navItem.checked))}>
              {navItem.checked ? <MdRadioButtonChecked/> : <MdRadioButtonUnchecked/>}
              <div className="navItem">{navItem.item}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TodoNav;