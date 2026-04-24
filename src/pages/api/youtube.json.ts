import type { APIRoute } from "astro";

const API_KEY = import.meta.env.YOUTUBE_API_KEY;
const UPLOADS_PLAYLIST_ID = import.meta.env.YOUTUBE_UPLOADS_PLAYLIST_ID;

export const GET: APIRoute = async () => {
    try {
        const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");

        url.searchParams.set("part", "snippet,contentDetails");
        url.searchParams.set("playlistId", UPLOADS_PLAYLIST_ID);
        url.searchParams.set("maxResults", "8");
        url.searchParams.set("key", API_KEY);

        const response = await fetch(url);

        if (!response.ok) {
            return new Response(
                JSON.stringify({ error: "Could not fetch YouTube videos" }),
                { status: response.status }
            );
        }

        const data = await response.json();

        const videos = data.items
            .filter((item: any) => item.snippet?.resourceId?.videoId)
            .map((item: any) => {
                const videoId = item.snippet.resourceId.videoId;

                return {
                    id: videoId,
                    title: item.snippet.title,
                    channel: item.snippet.videoOwnerChannelTitle,
                    thumbnail:
                        item.snippet.thumbnails?.maxres?.url ||
                        item.snippet.thumbnails?.high?.url ||
                        item.snippet.thumbnails?.medium?.url,
                    url: `https://www.youtube.com/watch?v=${videoId}`,
                    publishedAt: item.snippet.publishedAt,
                };
            });

        return new Response(JSON.stringify({ videos }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "public, max-age=1800",
            },
        });
    } catch (error) {
        return new Response(
            JSON.stringify({ error: "Unexpected YouTube API error" }),
            { status: 500 }
        );
    }
};