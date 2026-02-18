interface Asset {
	id: number;
	name: string;
	size: number;
	download_count: number;
	browser_download_url: string;
	content_type: string;
}

interface Release {
	id: number;
	tag_name: string;
	name: string;
	body: string;
	published_at: string;
	html_url: string;
	prerelease: boolean;
	draft: boolean;
	assets: Asset[];
}