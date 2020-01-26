const BaseURL = "https://afternoon-waters-49321.herokuapp.com";

const Endpoints = {
    Featured: "/v1/browse/featured-playlists",
    Playlist: "/v1/playlists/"
};

export const FeaturedController = {
    Fetch: async () => {
        URL = BaseURL + Endpoints.Featured;
        const results = await fetch(URL)
            .then((response) => response.json());
        return results;
    }
}

export const PlaylistController = {
    Fetch: async (id) => {
        URL = BaseURL + Endpoints.Playlist + id;
        console.log("URI: " + URL);
        const results = await fetch(URL)
            .then((response) => response.json());
        return results;
    }
}