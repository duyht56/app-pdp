import styles from '../../styles/module-styles/VideoGallery.module.scss'

const VideoGallery = ({data}) => {
    let {videoGallery} = data
    videoGallery = videoGallery[0];
    return ( 
        <div className={styles['video-gallery-wrapper']}>
            <div className={styles['video-gallery']}>
                <div className={styles['video-gallery__full']}>
                    <div className={styles['video-gallery-container']}>
                        <span className={styles['play-button']}>
                            <svg viewBox="0 0 18 22" className={'SvgIcon'+' '+styles['SvgIcon--play-video']}><path d="M18 11L0 22V0z"></path></svg>
                        </span>
                            <div className={styles['video-wrapper']}>
                                <video
                                    playsInline="playsInline"
                                    muted
                                    loop="loop"
                                    controls="controls"
                                >
                                    <source src={videoGallery.OriginalUrl} type={videoGallery.type} />
                                </video>
                            </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default VideoGallery;