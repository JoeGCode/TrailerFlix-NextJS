"use client";
import { MovieVideo } from "@/types/movie";
import React, { useState } from "react";
import ScrollableRow from "../ScrollableRow";
import VideoCard from "../VideoCard";
import YoutubeModal from "../YoutubeModal";

type VideosAndModalType = {
  videos: MovieVideo[];
};

function VideosAndModal({ videos }: VideosAndModalType) {
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<MovieVideo | null>(null);

  const teasers = videos.filter((video) => video.type === "Teaser");
  const trailers = videos.filter((video) => video.type === "Trailer");
  const clips = videos.filter((video) => video.type === "Clip");
  const featurettes = videos.filter((video) => video.type === "Featurette");
  const behindTheScenes = videos.filter(
    (video) => video.type === "Behind the Scenes"
  );
  function clickHandler(video: MovieVideo) {
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
      {selectedVideo && (
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
