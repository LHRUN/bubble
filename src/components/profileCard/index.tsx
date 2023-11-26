import { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import { IProfile } from '@/types/config';

import Image from 'next/image';
import Like from '@/components/like';

import { PoppinsFont } from '@/common/font';
import classNames from 'classnames';
import styles from './index.module.scss';

interface IProps {
  data: IProfile;
  showLike?: boolean;
}

const blurDataUrl = `data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0jE6pBwADRgF5f4DEIAAAAABJRU5ErkJggg==`;

const ProfileCard: FC<IProps> = ({ data, showLike = true }) => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [aniTranslateY, setAniTranslateY] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [likeNum, setLikeNum] = useState(0);

  useEffect(() => {
    if (data.likes !== likeNum) {
      setLikeNum(data.likes);
    }
  }, [data.likes]);

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

  const jumpGithub = () => {
    window.open(data.githubUrl, '_blank');
  };

  return (
    <div
      onClick={() => jumpGithub()}
      className={styles.card}
      style={
        {
          '--aniTranslateY': `-${aniTranslateY}px`
        } as CSSProperties
      }
    >
      <div className={styles.bg}></div>
      <div className={styles.header}>
        <div
          className={styles.headerLeft}
          style={{ maxWidth: showLike ? '93%' : '100%' }}
        >
          <div className={styles.name}>{data.name}</div>
          <div className={classNames(styles.time, PoppinsFont.className)}>
            Snapshot Time:{' '}
            <span className={styles.timeText}>{data.snapshootTime}</span>
          </div>
        </div>
        {showLike ? (
          <div className={styles.headerRight}>
            <Like id={data.id} likeNum={data.likes} type="profile" />
          </div>
        ) : null}
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
    </div>
  );
};

export default ProfileCard;
