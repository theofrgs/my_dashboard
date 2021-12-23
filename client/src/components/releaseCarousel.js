import Carousel from 'react-elastic-carousel';
import SpotifyLastRelease from "./SpotifyLastRelease";

export default function releaseCarousel(spotifyLastReleaseItem) {
    if (!spotifyLastReleaseItem)
        return (null)

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
    ];
    const items = [0, 1, 2];

    return (
        <Carousel breakPoints={breakPoints}>
            {items.map((item) => (SpotifyLastRelease(spotifyLastReleaseItem.albums.items[item])))}
        </Carousel>
    )
}