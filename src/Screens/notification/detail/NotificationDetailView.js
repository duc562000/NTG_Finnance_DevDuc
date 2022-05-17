import React, { useEffect } from "react";
import NotificationDetailView from "./NotificationDetail";
import { detailNoti } from "../../../apis/Functions/home";

const NotificationDetail = (props) => {
  const { notificationDetail } = props.route.params;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    detailNoti(notificationDetail.id);
  };

  return <NotificationDetailView notificationDetail={notificationDetail} />;
};
export default NotificationDetail;
