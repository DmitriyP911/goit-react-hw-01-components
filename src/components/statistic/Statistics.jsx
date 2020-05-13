import React from 'react';
import statistics from '../../data/statistical-data.json';
import PropTypes from 'prop-types';
import styles from './statisticStyles.module.css';
import changeColor from '../../helpers/changeColor';

const Statistics = ( { title = "Upload stats", stats = { statistics } } ) => (
    <section className={styles.statistics}>
        <h2 className="title">{title}</h2>

        <ul className={styles.statList}>
            {
                stats.map( ( elem ) => {
                    return ( <li className={styles.item} style={{ backgroundColor: changeColor() }} key={elem.id}>
                        <span className={styles.label}>{elem.label}</span>
                        <span className="percentage">{elem.percentage}%</span>
                    </li>
                    )
                } )
            }
        </ul>
    </section>
)

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf( PropTypes.shape( {
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    } ) )
}

changeColor()

export default Statistics;