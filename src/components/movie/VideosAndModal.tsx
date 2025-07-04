"use client";
import { MovieVideoArray, MovieVideoType } from "@/types/tmdb-types";
import { useState } from "react";
import ScrollableRow from "../ScrollableRow";
import VideoCard from "../VideoCard";
import YoutubeModal from "../YoutubeModal";

type VideosAndModalType = {
  videos: MovieVideoArray;
};

function VideosAndModal({ videos }: VideosAndModalType) {
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<MovieVideoType | null>(
    null,
  );

  const videosWithKey = videos.filter((video) => !!video.key);

  const teasers = videosWithKey.filter((video) => video.type === "Teaser");
  const trailers = videosWithKey.filter((video) => video.type === "Trailer");
  const clips = videosWithKey.filter((video) => video.type === "Clip");
  const featurettes = videosWithKey.filter(
    (video) => video.type === "Featurette",
  );
  const behindTheScenes = videosWithKey.filter(
    (video) => video.type === "Behind the Scenes",
  );
  function clickHandler(video: MovieVideoType) {
    setSelectedVideo(video);
    setShowModal(true);
  }
  return (
    <>
      {trailers.length > 0 && (
        <ScrollableRow title="Trailers">
          {trailers.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              clickHandler={clickHandler}
            />
          ))}
        </ScrollableRow>
      )}
      {teasers.length > 0 && (
        <ScrollableRow title="Teasers">
          {teasers.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              clickHandler={clickHandler}
            />
          ))}
        </ScrollableRow>
      )}
      {clips.length > 0 && (
        <ScrollableRow title="Clips">
          {clips.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              clickHandler={clickHandler}
            />
          ))}
        </ScrollableRow>
      )}
      {featurettes.length > 0 && (
        <ScrollableRow title="Featurettes">
          {featurettes.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              clickHandler={clickHandler}
            />
          ))}
        </ScrollableRow>
      )}
      {behindTheScenes.length > 0 && (
        <ScrollableRow title="Behind the Scenes">
          {behindTheScenes.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              clickHandler={clickHandler}
            />
          ))}
        </ScrollableRow>
      )}
      {selectedVideo && selectedVideo.key && (
        <YoutubeModal
          videoKey={selectedVideo.key}
          showModal={showModal}
          closeModal={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default VideosAndModal;
