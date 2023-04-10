import styles from '../../styles/modules/VideoGallery.module.scss';

const videoGalleryMockup = {
  OriginalUrl: 'https://services.electrolux-medialibrary.com/118ed4c0ee6546f4a7684c7fef8c985aNrZmYkM861d1f/view/Online_Desk_MP4_HDReady/HMEEWM173AA00004.mp4',
  Url: 'https://services.electrolux-medialibrary.com/118ed4c0ee6546f4a7684c7fef8c985aNrZmYkM861d1f/view/Online_Desk_MP4_HDReady/HMEEWM173AA00004.mp4',
  Thumbnail: 'https://services.electrolux-medialibrary.com/118ed4c0ee6546f4a7684c7fef8c985aNrZmYkM861d1f/view/WS_PV/HMEEWM173AA00004.png',
  SplashScreenUrl: 'https://services.electrolux-medialibrary.com/118ed4c0ee6546f4a7684c7fef8c985aNrZmYkM861d1f/view/WS_ZO/HMEEWM173AA00004.png',
  SplashScreenResolution: '1200x1200',
  MimeType: 'video/mp4',
  Resolution: null,
  IsYoutube: false,
  YoutubeId: null,
  IsExternalSource: false,
  IsVisible: true,
  OrderIndex: 9999,
  AssetName: 'HMEEWM173AA00004',
  PreviewImageUrl: 'https://services.electrolux-medialibrary.com/118ed4c0ee6546f4a7684c7fef8c985aNrZmYkM861d1f/view/WS_ZO/HMEEWM173AA00004.png',
  MainImageUrl: 'https://services.electrolux-medialibrary.com/118ed4c0ee6546f4a7684c7fef8c985aNrZmYkM861d1f/view/WS_ZO/HMEEWM173AA00004.png',
  IsVideo: true,
  MediaSrc: 'https://services.electrolux-medialibrary.com/118ed4c0ee6546f4a7684c7fef8c985aNrZmYkM861d1f/view/Online_Desk_MP4_HDReady/HMEEWM173AA00004.mp4',
  Type: 'video/mp4'
}
const VideoGallery = () => {
  return (
    <div className={styles['video-gallery']}>
      {/* <h6 className={styles['video-gallery__main-title']}>
        Video Gallery component from PDP mFE
      </h6> */}
      <div className={styles['video-wrapper']}>
          <video
              playsInline="playsInline"
              muted
              loop="loop"
              controls="controls"
          >
              <source src={videoGalleryMockup.OriginalUrl} type={videoGalleryMockup.type} />
          </video>
      </div>
    </div>
  );
};

export default VideoGallery;
