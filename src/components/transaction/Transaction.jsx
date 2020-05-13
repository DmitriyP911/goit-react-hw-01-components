import React from 'react';
import transaction from '../../data/transaction.json';
import styles from './transactionStyles.module.css';
import PropTypes from 'prop-types';

const Transactions = ( { item = { transaction } } ) => (
    <table className={styles.transaction}>
        <thead className={styles.thead}>
            <tr className={styles.tr}>
                <th className={styles.th}>Type</th>
                <th className={styles.th}>Amount</th>
                <th className={styles.th}>Currency</th>
            </tr>
        </thead>

        <tbody className={styles.tbody}>
            {
                item.map( elem => {
                    return (
                        <tr className={styles.tr} key={elem.id}>
                            <td className={styles.td}>{elem.type}</td>
                            <td className={styles.td}>{elem.amount}</td>
                            <td className={styles.td}>{elem.currency}</td>
                        </tr>
                    )
                } )
            }
        </tbody>
    </table>
)

Transactions.propTypes = {
    item: PropTypes.arrayOf( PropTypes.shape( {
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string,
        currency: PropTypes.string.isRequired
    } ) )
}

export default Transactions;