type YoutubeModalType = {
  showModal: boolean;
  videoKey: string;
  closeModal: () => void;
};

function YoutubeModal({ showModal, videoKey, closeModal }: YoutubeModalType) {
  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black bg-opacity-50 p-4 pt-32 sm:p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-[90vw] sm:max-w-4xl rounded-lg bg-black p-2 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 bg-black rounded-md px-2 py-1 text-sm sm:text-base hover:text-gray-300"
            >
              Close
            </button>
            <div className="aspect-video">
              {videoKey ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videoKey}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                ></iframe>
              ) : (
                <p className="flex h-full items-center justify-center text-white">
                  No trailer available
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default YoutubeModal;
