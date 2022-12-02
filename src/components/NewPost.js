import { useState } from "react";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../api/api";
import { getToken } from "./storage/Storage"
function NewPost() {

	async function submitRegister(name, email, password, avatar, banner) {
		const url = BASE_URL + "/social/posts"
		const data = JSON.stringify({
				name: name,
				email: email,
				password: password,
				avatar: avatar,
				banner: banner,
		});
		const headers = {
				method: "POST",
				body: data,
				Authorization: "Bearer " + token,
		};
		try {
				const res = await fetch(url, headers);
				const json = await res.json();
				console.log(json);
		} catch (error) {}
}

  return (
    <div>
			<form>
				<p>New post</p>
				<div>
					
				</div>
			</form>
		</div>
  )
}

export default NewPost