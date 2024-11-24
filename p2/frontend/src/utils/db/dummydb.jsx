export const POSTS = [
	{
		_id: "1",
		text: "come join us in the ultimate event 😍",
		img: "/posts/fiesta.png",
		user: {
			username: "johndoe",
			profileImg: "/avatar/boy1.png",
			fullName: "John Doe",
		},
		comments: [
			{
				_id: "1",
				text: "Nice Tutorial",
				user: {
					username: "janedoe",
					profileImg: "/avatar/girl1.png",
					fullName: "Jane Doe",
				},
			},
		],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
	},
	
	{
		_id: "3",
		text: "its time for the arts and science to blast their skills🚀",
		img: "/posts/techblast.png",
		user: {
			username: "johndoe",
			profileImg: "/avatar/boy3.png",
			fullName: "John Doe",
		},
		comments: [],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894", "6658s895", "6658s896"],
	},
	
];

export const USERS_FOR_RIGHT_PANEL = [
	{
		_id: "1",
		fullName: "John Doe",
		username: "johndoe",
		profileImg: "/avatar/boy2.png",
	},
	{
		_id: "2",
		fullName: "Jane Doe",
		username: "janedoe",
		profileImg: "/avatar/girl1.png",
	},
	{
		_id: "3",
		fullName: "Bob Doe",
		username: "bobdoe",
		profileImg: "/avatar/boy3.png",
	},
	{
		_id: "4",
		fullName: "Daisy Doe",
		username: "daisydoe",
		profileImg: "/avatar/girl2.png",
	},
];
