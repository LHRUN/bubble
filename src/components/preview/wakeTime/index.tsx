import styles from './index.module.scss';

const WakeTimePreview = () => {
  const markdownStr = `
🌞 Morning    95 commits     ███████░░░░░░░░░░░░░░░░░░   30.55% 
🌆 Daytime    78 commits     ██████░░░░░░░░░░░░░░░░░░░   25.08% 
🌃 Evening    112 commits    █████████░░░░░░░░░░░░░░░░   36.01% 
🌙 Night      26 commits     ██░░░░░░░░░░░░░░░░░░░░░░░   8.36%
  `;
  return (
    <textarea
      value={markdownStr}
      disabled={true}
      className={styles.card}
    ></textarea>
  );
};

export default WakeTimePreview;
