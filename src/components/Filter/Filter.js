
import styles from './Filter.module.css';

export default function Filter({ filter, onChange }) {
   return (
      <label className={styles.label}>
         Find subscriber by name
         <input
            type="text"
            name="filter"
            placeholder="Enter some letters to search"
            value={filter}
            onChange={event => onChange(event.target.value)}
         />
      </label>
   );
}