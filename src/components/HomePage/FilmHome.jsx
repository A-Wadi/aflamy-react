import React from "react";
import { useSelector } from "react-redux";
import i18n from "./../../translate/i18next";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FilmHome = () => {
  const { t, i18n } = useTranslation();
  // const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const newFilm = data.filter(
    (film) =>
      film.Year ==
      Math.max.apply(
        Math,
        data.map(function (film) {
          return film.Year;
        })
      )
  )[0];
  const iconRate = [];
  for (let i = 0; i < 5; i++) {
    iconRate.push(<FontAwesomeIcon key={"rateNewFilm" + i} icon={faStar} />);
  }
  return (
    <React.Fragment>
      {newFilm && (
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
      )}
    </React.Fragment>
  );
};

export default FilmHome;
