import { initializeApp } from "firebase/app";
import FireBaseConfig from "./FireBaseConfig";

const initializeAuthentication = () => {
    initializeApp(FireBaseConfig)
}
export default initializeAuthentication;