import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
  isYouTube?: boolean;
  isVimeo?: boolean;
}

const VideoModal = ({ isOpen, onClose, videoUrl, title, isYouTube, isVimeo }: VideoModalProps) => {
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
      <DialogContent className="max-w-7xl w-full p-0 bg-black/95 border-border">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        <div className="w-full aspect-video">
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
              className="w-full h-full object-contain"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
