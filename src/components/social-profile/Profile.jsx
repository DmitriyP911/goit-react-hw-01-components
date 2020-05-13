import React from 'react';
import styles from './profileStyle.module.css'
import PropTypes from 'prop-types';

const Profile = ( { avatar, name, location, tag, stats: { followers, views, likes } } ) => (
    <div className={styles.profile} key="1">
        <div className="description">
            <img
                src={avatar}
                alt="user avatar"
                className={styles.avatar}
            />
            <p className={styles.name}>{name}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
            <li className={styles.li}>
                <span className={styles.label}>followers</span>
                <span className={styles.quantity}>{followers}</span>
            </li>
            <li className={styles.li}>
                <span className={styles.label}>views</span>
                <span className={styles.quantity}>{views}</span>
            </li>
            <li className={styles.li}>
                <span className={styles.label}>likes</span>
                <span className={styles.quantity}>{likes}</span>
            </li>
        </ul>
    </div>
)

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.shape( {
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    } )
}

export default Profile;