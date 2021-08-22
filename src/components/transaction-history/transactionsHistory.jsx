import styles from './transactions.module.css';

function TransactionHistory({ items }) {
    return (
        <table className={styles.transaction_history}>
            <thead>
                <tr>
                    <th className={styles.head}>Type</th>
                    <th className={styles.head}>Amount</th>
                    <th className={styles.head}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, currency, amount, type }) => (
                        <tr key={id}>
                            <td className={styles.row}>{type}</td>
                            <td className={styles.row}>{amount}</td>
                            <td className={styles.row}>{currency}</td>
                      </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TransactionHistory;