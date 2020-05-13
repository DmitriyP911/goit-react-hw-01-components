import React from 'react';
import FriendsListItem from './FrindsListItem';
import friends from '../../data/friends.json';
import style from './list-style.module.css';
import PropTypes from 'prop-types';

const FriendsList = ( { friend = { friends } } ) => (
    <ul className={style.list}>
        {friend.map( ( elem ) => {
            return ( <FriendsListItem
                key={elem.id}
                avatar={elem.avatar}
                name={elem.name}
                isOnline={elem.isOnline}
            /> );
        } )}
    </ul>
)

FriendsList.propTypes = {
    friends: PropTypes.arrayOf( PropTypes.shape( {
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    } ) )
}

export default FriendsList;