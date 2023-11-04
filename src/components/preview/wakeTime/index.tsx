import Markdown from 'react-markdown';
import styles from './index.module.scss';

const WakeTimePreview = () => {
  const markdownStr = `
${'```text'}
🌞 Morning    95 commits     ███████░░░░░░░░░░░░░░░░░░   30.55% 
🌆 Daytime    78 commits     ██████░░░░░░░░░░░░░░░░░░░   25.08% 
🌃 Evening    112 commits    █████████░░░░░░░░░░░░░░░░   36.01% 
🌙 Night      26 commits     ██░░░░░░░░░░░░░░░░░░░░░░░   8.36%
${'```'}
  `;
  return (
    <div className={styles.card}>
      <Markdown>{markdownStr}</Markdown>
    </div>
  );
};

export default WakeTimePreview;
