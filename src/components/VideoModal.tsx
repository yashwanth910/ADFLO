import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useState, useEffect } from "react";


interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
  isYouTube?: boolean;
  isVimeo?: boolean;
}

const VideoModal = ({ isOpen, onClose, videoUrl, title, isYouTube, isVimeo }: VideoModalProps) => {
  const [isVertical, setIsVertical] = useState<boolean | null>(null);
  useEffect(() => {
    setIsVertical(false);
  }, [videoUrl]);
  const getEmbedUrl = () => {
    if (isYouTube) {
      const videoId = videoUrl.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    if (isVimeo) {
      const videoId = videoUrl.match(/vimeo\.com\/(\d+)/)?.[1];
      return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    }
    return videoUrl;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
  <DialogContent
  className="
    p-0 bg-black/95 border-border rounded-xl flex justify-center items-center

    [&_.absolute.right-4.top-4]:p-2.5
    [&_.absolute.right-4.top-4]:rounded-full
    [&_.absolute.right-4.top-4]:bg-black/50
    [&_.absolute.right-4.top-4]:hover:bg-black/70

    [&_.absolute.right-4.top-4_svg]:w-4
    [&_.absolute.right-4.top-4_svg]:h-4
    [&_.absolute.right-4.top-4_svg]:text-white
  "
  style={{
    width: isVertical ? "auto" : "90vw",
    maxWidth: isVertical ? "420px" : "1200px",
  }}
>

        <div className="flex justify-center items-center rounded-xl overflow-hidden">
  {isYouTube || isVimeo ? (
    <iframe
      src={getEmbedUrl()}
      title={title}
      className="w-full h-full"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    />
  ) : (
    <video
      src={videoUrl}
      controls
      autoPlay
      playsInline
      onLoadedMetadata={(e) => {
        const v = e.currentTarget;
        setIsVertical(v.videoHeight > v.videoWidth);
      }}
      className="max-h-[80vh] h-auto w-auto"
    />
  )}
</div>

      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
