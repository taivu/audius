export const presistMutation = {
	addSearchResult: ['entities', 'playList', 'sources'],
	dropSearchResult: ['entities', 'playList', 'sources'],
	dropMoveItem: ['playList', 'sources', 'entities'],
	importPlayList: ['entities', 'playList', 'sources', 'sourcesOrdered'],
	toggleLeftMenu: ['showLeftMenu'],
	addTags: ['sourcesOrdered', 'sources'],
	selectMediaSource: ['currentMediaSource'],
	renamePlayList: ['sourcesOrdered', 'sources', 'currentMediaSource'],
	deletePlayList: ['sourcesOrdered', 'sources', 'currentMediaSource'],
	toggleShuffle: ['shuffle'],
	setExportURL: ['exportURLs'],
	play: ['webScrapers', 'matrixRooms'],
	nextVideo: ['webScrapers'],
	movePlayListMedia: ['playList', 'sources', 'entities'],
	moveTagsOrdered: ['sourcesOrdered'],
	migrationSuccess: ['migration'],
	removeMedia: ['playList', 'sources', 'entities'],
	upgradeEntities: ['entities'],
	setStartStopMarker: ['entities'],
	updateWebScraper: ['webScrapers'],
	addUrlPattern: ['webScrapers'],
	videoError: ['entities'],
	updateCurrentMedia: ['entities'],
	addWebScraper: ['webScrapersOrdered', 'webScrapers'],
	renameWebScraper: ['webScrapersOrdered', 'webScrapers'],
	setIsMobile: ['isMobile'],
};
