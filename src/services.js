import Axios from "axios";

const getRealTimeInfo = async () => {
  const { data } = await Axios.get("http://localhost:4000/RealTimeInfo");

  return data;
};

const getProfile = async () => {
  const { data } = await Axios.get("http://localhost:4000/User");

  return data;
};

export { getRealTimeInfo, getProfile };
