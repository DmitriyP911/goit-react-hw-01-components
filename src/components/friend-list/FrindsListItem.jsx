import React from 'react';
import style from './list-item-style.module.css'

const FriendListItem = ( { avatar, name, isOnline, id } ) => (
    <li className={style.listItem} key={id}>
        <span className={isOnline ? style.isOnline : style.offline}>&bull;</span>
        <img className={style.img} src={avatar} alt="" width="48" />
        <p className="name">{name}</p>
    </li>
)

export default FriendListItem;