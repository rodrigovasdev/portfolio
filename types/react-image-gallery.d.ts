declare module 'react-image-gallery' {
  export interface ImageGalleryItem {
    original: string;
    thumbnail?: string;
    originalAlt?: string;
    thumbnailAlt?: string;
    originalTitle?: string;
    thumbnailTitle?: string;
  }

  export interface ImageGalleryProps {
    items: ImageGalleryItem[];
    showThumbnails?: boolean;
    showPlayButton?: boolean;
    showBullets?: boolean;
    showIndex?: boolean;
    showFullscreenButton?: boolean;
    showNav?: boolean;
    autoPlay?: boolean;
    slideInterval?: number;
    slideOnThumbnailOver?: boolean;
    startIndex?: number;
    onSlide?: (currentIndex: number) => void;
    onScreenChange?: (isFullScreen: boolean) => void;
    onPause?: (currentIndex: number) => void;
    onPlay?: (currentIndex: number) => void;
    onClick?: (event: React.MouseEvent) => void;
    onImageLoad?: (event: React.SyntheticEvent) => void;
    onImageError?: (event: React.SyntheticEvent) => void;
    onTouchMove?: (event: React.TouchEvent) => void;
    onTouchEnd?: (event: React.TouchEvent) => void;
    onTouchStart?: (event: React.TouchEvent) => void;
    onMouseOver?: (event: React.MouseEvent) => void;
    onMouseLeave?: (event: React.MouseEvent) => void;
    additionalClass?: string;
    renderCustomControls?: () => React.ReactElement;
    renderItem?: (item: ImageGalleryItem) => React.ReactElement;
    renderThumbInner?: (item: ImageGalleryItem) => React.ReactElement;
    renderLeftNav?: (onClick: () => void, disabled: boolean) => React.ReactElement;
    renderRightNav?: (onClick: () => void, disabled: boolean) => React.ReactElement;
    renderPlayPauseButton?: (onClick: () => void, isPlaying: boolean) => React.ReactElement;
    renderFullscreenButton?: (onClick: () => void, isFullscreen: boolean) => React.ReactElement;
  }

  declare const ImageGallery: React.ComponentType<ImageGalleryProps>;
  export default ImageGallery;
}