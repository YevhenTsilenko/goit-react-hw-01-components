import styles from './transactions.module.css';

function transitionItem ({ currency, amount, type }) {
    return (
        <tr>
            <td className={styles.row}>{type}</td>
            <td className={styles.row}>{amount}</td>
            <td className={styles.row}>{currency}</td>
        </tr>
    )
}

export default transitionItem