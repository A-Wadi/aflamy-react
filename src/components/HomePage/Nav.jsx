import React from "react";
import { NavLink } from "react-router-dom";
import i18n from "./../../translate/i18next";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import Loading from "../common/Loading";

export const Nav = () => {
  const { t, i18n } = useTranslation();
  const [shownMenu, setshownMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <React.Fragment>
      <nav className={`container ${shownMenu ? "active" : ""}`}>
        <div>
          <NavLink to="/">
            <img
              src={require("./../../logo.png")}
              width={164}
              height={63}
              alt="Logo"
            />
          </NavLink>

          <span className="open-menu" onClick={() => setshownMenu(!shownMenu)}>
            <FontAwesomeIcon icon={faBars} />
          </span>

          <div className="links">
            <div>
              <NavLink to="/">{t("nav-home")}</NavLink>
              <span>
                {t("nav-aflam")}
                <div className="listDrop">
                  <NavLink to="/aflam">{t("nav-aflam")}</NavLink>
                </div>
              </span>
              <NavLink to="/serials">{t("nav-serials")}</NavLink>
              <NavLink to="/sport">{t("nav-sport")}</NavLink>
              <NavLink to="/islamic">{t("nav-islamic")}</NavLink>
              <NavLink to="/anime">{t("nav-anime")}</NavLink>
              {i18n.language == "ar" && (
                <span
                  className="nav-lang"
                  onClick={() => {
                    i18n.changeLanguage("en");
                    setLoading(true);
                    setTimeout(function () {
                      setLoading(false);
                    }, 1000);
                  }}
                >
                  {t("nav-lang")}
                </span>
              )}
              {i18n.language == "en" && (
                <span
                  className="nav-lang"
                  onClick={() => {
                    i18n.changeLanguage("ar");
                    setLoading(true);
                    setTimeout(function () {
                      setLoading(false);
                    }, 1000);
                  }}
                >
                  {t("nav-lang")}
                </span>
              )}
            </div>
            {/* <form>
              <div className="boxSearch">
                <input type="text" placeholder={t("nav-input-search")} />
                <button type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </form> */}
          </div>
        </div>
      </nav>
      {loading ? <Loading /> : null}
    </React.Fragment>
  );
};
