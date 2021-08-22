import styles from './transactions.module.css';
import TransitionItem from './transitionItem';

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
                {items.map((item) => (
                       <TransitionItem 
                            key={item.id}
                            type={item.type}
                            amount={item.amount}
                            currency={item.currency}
                       />
                ))}
            </tbody>
        </table>
    )
}

export default TransactionHistory;