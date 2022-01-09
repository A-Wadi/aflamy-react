import React from "react";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

const Video = (props) => {
  const { t, i18n } = useTranslation();
  const [modeVideo, setModeVideo] = useState(false);
  const currentVideo = useRef(null);
  const data = useSelector((state) => state.data);
  var showing = null;

  if (data.length > 0) {
    showing = data.filter((film) => film.id == props.match.params.id)[0];
  }

  function playVideo() {
    if (currentVideo.current.paused) {
      currentVideo.current.play();
      setModeVideo(true);
    } else {
      currentVideo.current.pause();
      setModeVideo(false);
    }
  }

  return (
    <div className="boxVideo">
      {showing !== null && (
        <React.Fragment>
          <h1>
            <span>
              {i18n.language == "ar" && showing.TitleAr}
              {i18n.language == "en" && showing.TitleEn}
            </span>
          </h1>
          {showing.LinkVideo && (
            <React.Fragment>
              <video ref={currentVideo}>
                <source src={showing.LinkVideo} type="video/mp4" />
              </video>
              <button onClick={() => playVideo()}>
                {currentVideo.current == null && (
                  <FontAwesomeIcon icon={faPlay} />
                )}
                {currentVideo.current !== null &&
                  !modeVideo &&
                  currentVideo.current.paused && (
                    <FontAwesomeIcon icon={faPlay} />
                  )}
                {currentVideo.current !== null &&
                  modeVideo &&
                  !currentVideo.current.paused && (
                    <FontAwesomeIcon icon={faPause} />
                  )}
              </button>
            </React.Fragment>
          )}
          {showing.LinkVideo == undefined && (
            <p className="no-content">
              {t('no-content')}
            </p>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default Video;
