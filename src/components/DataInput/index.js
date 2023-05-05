import styles from './style.module.css';

const DataInput = ({ lb, tp }) => {
    return (
        <div className={styles.data__inputd}>
            <label className={styles.data__inputlb}>
                {lb}
                <input type={tp} className={styles.data__input} />
            </label>
        </div>
    )
}

export default DataInput;