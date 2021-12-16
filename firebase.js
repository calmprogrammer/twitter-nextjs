import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { defaultConfig } from "next/dist/server/config-shared";

const firebaseConfig = {
	apiKey: "AIzaSyB6-oPlPhUnkkgQ6tLvx_S_J4aDk-EW_Lw",
	authDomain: "twitter-nextjs-e179c.firebaseapp.com",
	projectId: "twitter-nextjs-e179c",
	storageBucket: "twitter-nextjs-e179c.appspot.com",
	messagingSenderId: "987687657279",
	appId: "1:987687657279:web:aa0b87c1efe85e89813d8a",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps();
const db = getFirestore();
const storage = getStorage();

export default app;

export { db, storage };
