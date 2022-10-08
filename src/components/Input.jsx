import React, { useContext, useState } from "react";
import Attach from "../assets/images/attach.png";
import AddImage from "../assets/images/img.png";
import { ChatContext } from "../contexts/ChatContext";
import { StateContext } from "../contexts/ContextProvider";
import {
	arrayUnion,
	doc,
	serverTimestamp,
	Timestamp,
	updateDoc,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
	const [text, setText] = useState("");
	const [pic, setPic] = useState(null);

	const { currentUser } = useContext(StateContext);
	const { data } = useContext(ChatContext);

	const handleSend = async () => {
		if (pic) {
			const storageRef = ref(storage, uuid());

			const uploadTask = uploadBytesResumable(storageRef, pic);

			uploadTask.on(
				(error) => {
					// Handle unsuccessful uploads
					// setErr(true);
				},
				() => {
					// Handle successful uploads on complete
					getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
						await updateDoc(doc(db, "chats", data.chatid), {
							messages: arrayUnion({
								id: uuid(),
								text,
								senderId: currentUser.uid,
								date: Timestamp.now(),
								pic: downloadURL,
							}),
						});
					});
				}
			);
		} else {
			await updateDoc(doc(db, "chats", data.chatid), {
				messages: arrayUnion({
					id: uuid(),
					text,
					senderId: currentUser.uid,
					date: Timestamp.now(),
				}),
			});
		}

		await updateDoc(doc(db, "userChats", currentUser.uid), {
			[data.child + ".lastMessage"]: {
				text,
			},
			[data.chatId + ".date"]: serverTimestamp(),
		});
		await updateDoc(doc(db, "userChats", data.user.uid), {
			[data.child + ".lastMessage"]: {
				text,
			},
			[data.chatId + ".date"]: serverTimestamp(),
		});

		// setText("");
		// setPic(null);
	};

	return (
		<div className="input">
			<input
				type="text"
				placeholder="Send a message..."
				onChange={(e) => setText(e.target.value)}
				value={text}
			/>
			<div className="send">
				<img src={Attach} alt="" />
				<input
					type="file"
					id="file"
					style={{ display: "none" }}
					onChange={(e) => setPic(e.target.files[0])}
				/>
				<label htmlFor="file">
					<img src={AddImage} alt="" />
				</label>
				<button onClick={handleSend}>Send</button>
			</div>
		</div>
	);
};

export default Input;
