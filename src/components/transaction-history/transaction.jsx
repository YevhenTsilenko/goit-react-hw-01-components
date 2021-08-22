// import styles from './transactions.css';

function Transaction({ currency, amount, type }) {
    return (
      <tr >
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    )
}

export default Transaction;