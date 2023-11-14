import Image from 'next/image';
import classNames from 'classnames';
import { PoppinsFont } from '@/common/font';
import styles from './index.module.scss';
import { IProfileCard } from '@/types/config';
import { CSSProperties, FC, useEffect, useRef, useState } from 'react';

interface IProps {
  data: IProfileCard;
}

const blurDataUrl = `data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0jE6pBwADRgF5f4DEIAAAAABJRU5ErkJggg==`;

const ProfileCard: FC<IProps> = ({ data }) => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [aniTranslateY, setAniTranslateY] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    const imageContainerHeight = imageContainerRef?.current?.offsetHeight;
    if (imageContainerHeight && imageHeight) {
      const translateY = imageHeight - imageContainerHeight;
      setAniTranslateY(translateY >= 0 ? translateY : 0);
    }
  }, [
    aniTranslateY,
    imageContainerRef?.current?.offsetHeight,
    imageHeight,
    data.imageUrl
  ]);

  return (
    <a
      className={styles.card}
      href={data.githubUrl}
      target="_blank"
      style={
        {
          '--aniTranslateY': `-${aniTranslateY}px`
        } as CSSProperties
      }
    >
      <div className={styles.bg}></div>
      <div className={styles.header}>
        <div className={styles.name}>{data.name}</div>
        <div className={classNames(styles.time, PoppinsFont.className)}>
          Snapshot Time:{' '}
          <span className={styles.timeText}>{data.snapshootTime}</span>
        </div>
      </div>
      <div ref={imageContainerRef} className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={data.imageUrl}
          alt={data.name}
          width={90}
          height={150}
          quality={40}
          loading="lazy"
          placeholder="blur"
          blurDataURL={blurDataUrl}
          onLoad={(e) => {
            setImageHeight((e.target as HTMLImageElement).offsetHeight);
          }}
        />
      </div>
    </a>
  );
};

export default ProfileCard;
