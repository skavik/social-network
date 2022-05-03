import React from "react";
import Proloader from "../../common/Proloader/Proloader";
import style from "./PersonalInfo.module.css";
import lookingJob from "../../../assets/img/lookingJob.png";
import noLookingJob from "../../../assets/img/noLookingJob.png";
import facebook from "../../../assets/img/facebook.png";
import website from "../../../assets/img/website.png";
import github from "../../../assets/img/github.png";
import insta from "../../../assets/img/insta.png";
import twitter from "../../../assets/img/twitter.png";
import vk from "../../../assets/img/vk.png";
import youtube from "../../../assets/img/youtube.png";

const PersonalInfo = (props) => {
  if (!props.profile) {
    return <Proloader />;
  }

  return (
    <div>
      <div className={style.mainImg}>
        <img src={props.profile.photos.large} />
      </div>
      <div className={style.PersonalDescripytiom}>
        <img src={props.profile.photos.small} />
        <div className={style.PersonalInfo}>
          <p className={style.name}>{props.profile.fullName}</p>
          <div className={style.info}>
            <p>{props.profile.aboutMe}</p>
            <p className={style.boxJob}>
              {props.profile.lookingForAJob ? (
                <img src={lookingJob} />
              ) : (
                <img src={noLookingJob} />
              )}
              <span>{props.profile.lookingForAJobDescription}</span>
            </p>
            <p className={style.network}>
              {props.profile.contacts.facebook ? (
                <a href={props.profile.contacts.facebook} title="facebook">
                  <img src={facebook} />
                </a>
              ) : null}
              {props.profile.contacts.website ? (
                <a href={props.profile.contacts.website} title="website">
                  <img src={website} />
                </a>
              ) : null}
              {props.profile.contacts.vk ? (
                <a href={props.profile.contacts.vk} title="vk">
                  <img src={vk} />
                </a>
              ) : null}
              {props.profile.contacts.twitter ? (
                <a href={props.profile.contacts.twitter} title="twitter">
                  <img src={twitter} />
                </a>
              ) : null}
              {props.profile.contacts.instagram ? (
                <a href={props.profile.contacts.instagram} title="instagram">
                  <img src={insta} />
                </a>
              ) : null}
              {props.profile.contacts.youtube ? (
                <a href={props.profile.contacts.youtube} title="youtube">
                  <img src={youtube} />
                </a>
              ) : null}
              {props.profile.contacts.github ? (
                <a href={props.profile.contacts.github} title="github">
                  <img src={github} />
                </a>
              ) : null}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
