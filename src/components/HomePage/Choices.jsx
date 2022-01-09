import React from "react";
import { useSelector } from "react-redux";
import i18n from "./../../translate/i18next";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Choices = () => {
  const { t, i18n } = useTranslation();
  const data = useSelector((state) => state.data);
  return (
    <React.Fragment>
      {data.length && (
        <div className="boxChoice">
          <h3>{t("title-choice")} ...</h3>
          {data.map((e) => (
            <Link to={"/video/" + e.id} key={"choice-" + e.id}>
              {console.log(e.Rating)}
              <img
                src={
                  e.Poster !== undefined
                    ? e.Poster
                    : "https://is3-ssl.mzstatic.com/image/thumb/Purple128/v4/e4/ca/7a/e4ca7a91-1218-7019-ccb3-be9fc9f6d849/source/512x512bb.jpg"
                }
              />
              <h4>
                {i18n.language == "ar" && e.TitleAr}
                {i18n.language == "en" && e.TitleEn}
              </h4>
              <p>
                {i18n.language == "ar" && e.DescriptionAr}
                {i18n.language == "en" && e.DescriptionEn}
              </p>
              <span className="rate">
                {e.Rating}
                <FontAwesomeIcon icon={faStar} />
              </span>
            </Link>
          ))}
        </div>
      )}
      {/* {newFilm && (
        <div
          className="newFilm"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5) , rgba(0, 0, 0, 0.9) ), url(" +
              newFilm.BigPoster +
              ")",
          }}
        >
          <h1>
            {i18n.language == "ar" && newFilm.TitleAr}
            {i18n.language == "en" && newFilm.TitleEn}
          </h1>
          <p>
            {i18n.language == "ar" && newFilm.DescriptionAr}
            {i18n.language == "en" && newFilm.DescriptionEn}
          </p>
          <div rate={newFilm.Rating} className="rating">
            {iconRate} - <span className="tagFilm">{t("tag-new-film")}</span>
          </div>
          <div>
            <Link to={"/video/" + newFilm.id} className="seeNow">
              <FontAwesomeIcon icon={faPlay} />
              {t("see-now")}
            </Link>
          </div>
        </div>
      )} */}
    </React.Fragment>
  );
};

export default Choices;
