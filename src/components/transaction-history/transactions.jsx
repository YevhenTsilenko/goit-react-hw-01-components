import styles from './transactions.module.css';
import Transaction from './transaction';

function TransactionHistory({ items }) {
    return (
        <table className={styles.transaction_history}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <Transaction
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