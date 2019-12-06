import React, { useState } from 'react';
import {
  MdRadioButtonChecked,
  MdRadioButtonUnchecked,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoNav.scss';

const TodoNav = () => {
  const [navItems, setNavItems] = useState(
    [
      {
        id: 'All',
        item: 'All',
        checked: true,
      },
      {
        id: 'Todo',
        item: 'Todo',
        checked: false,
      },
      {
        id: 'Done',
        item: 'Done',
        checked: false,
      },
    ]
  )

  return(
    <div className="TodoNav">
      {navItems.map((navItem) => {
        return(
          <div key={navItem.id} className="nav">
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