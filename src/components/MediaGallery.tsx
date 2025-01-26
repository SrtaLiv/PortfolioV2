interface MediaGalleryProps {
  media: string;
  title: string;
  index: number;
}

export const MediaGallery = ({ media, title, index }: MediaGalleryProps) => {
  // Si no hay media, no renderizamos nada
  if (!media) return null;

  const isVideo = media.toLowerCase().endsWith('.mp4');

  return (
    <li className="flex items-start">
      {isVideo ? (
        <video
          src={media}
          className="w-full h-full object-cover rounded-md mb-4"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        media && (
          <img
            src={media}
            alt={`${title} preview ${index + 1}`}
            className="w-full h-full object-cover rounded-md mb-4"
          />
        )
      )}
    </li>
  );
}; 