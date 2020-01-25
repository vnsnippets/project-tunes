const BaseURL = "https://afternoon-waters-49321.herokuapp.com";

const Endpoints = {
    Featured: "/v1/browse/featured-playlists",
    Playlist: "/v1/playlists/{0}"
};

export const FeaturedController = {
    Fetch: async () => {
        const results = await fetch(BaseURL +  Endpoints.Featured)
            .then((response) => response.json());
        return results;
    }
}