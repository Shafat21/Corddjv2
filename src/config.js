const config = {
	ownerID: ['493042603181342730'],
	token: '#',
	// For looking up Twitch, Fortnite, Steam accounts
	api_keys: {
		// https://dev.twitch.tv/console/apps
		twitch: {
			clientID: 'qlu2daubh3hqs2v5lwwf6at3pouo7x',
			clientSecret: '416wc8m5ts465ww3e1rth6dh419qz6',
		},
		// https://fortnitetracker.com/site-api
		fortnite: 'd54f8936-5737-42ee-a362-143ad2d78169',
		// https://steamcommunity.com/dev
		steam: 'EAF3419DFA264A5BB3727BA7C8CFB87C',
		// https://developer.spotify.com/documentation/web-api/
		spotify: {
			iD: 'bf5ee2a72bae40ffadc71a47280e5ff9',
			secret: '053469ffeb3844079fab734ebf3090c2',
		},
		// Your Ubisoft email and password (You don't need to enable anything)
		rainbow: {
			email: 'email',
			password: 'password',
		},
		// https://genius.com/developers
		genuis: 'Dza2bzs2Z_9apiZEcX65MBV0gonNsTNv3CwWAoOkChvA5ayhpnnm5ObhpuADMpOL',
		// https://api.amethyste.moe/
		amethyste: 'c1d3ce766a3b87d240d68efa874dab33fc9befb174e0f7bbb70d773c0ae7242ce5e6015b108af43a92f5b4bfd05a14e6ad0bc773fbbbcf9e5a09dc0712676e60',
	},
	// add plugins/commands here if you don't want them loaded in the bot.
	disabledCommands: [],
	disabledPlugins: [],
	websiteURL: 'Bot\'s dashboard',
	// your support server
	SupportServer: {
		// Link to your support server
		link: 'https://discord.gg/',
		// Your support's server ID
		GuildID: '833731920944824341',
		// This for using the suggestion command on your server
		ModRole: '751857618720522341',
		// What channel to post the suggestions
		SuggestionChannel: '761619652009787392',
		// Where the bot will send Guild join/leave messages to
		GuildChannel: '761619652009787392',
	},
	// URL to mongodb
	MongoDBURl: 'mongodb+srv://Shafat21:Shafat2@cluster0.55oxs.mongodb.net/Cord?retryWrites=true&w=majority',
	// embed colour
	embedColor: '#2f3136',
	// This will spam your console if you enable this but will help with bug fixing
	debug: true,
};

module.exports = config;
