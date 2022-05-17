import React, {useState, useEffect} from 'react';
import NotificationView from './NotificationView';
import {useNavigation} from '@react-navigation/native';
const Notification = props => {
  const [data, setData] = useState([]);

  const [page, setPage] = useState(1);
  const [tottalPage, setTotalPage] = useState(1);
  const [isRefresh, setisRefresh] = useState(false);


  

  const navigation = useNavigation();

  return <NotificationView data={data} />;
};

export default Notification;
