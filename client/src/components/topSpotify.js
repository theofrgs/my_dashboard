function displayTrackInfos(tracks, item) {

    return (
        <div className="topSpotify">
            <img
                src={item.track.album.images[2].url}
                alt="new"
            />
            <p1>
                {tracks.indexOf(item)+1} -- {item.track.name} -- {item.track.artists[0].name}
            </p1>
        </div>
    )
}

export default function topSpotify(spotifyTop) {
    if (!spotifyTop)
        return (null)

    return (
        <div>
            <br />
            <p1>
                {spotifyTop.followers.total} followers
            </p1>
            <br />
            {spotifyTop.tracks.items.map(track => (
                <p1>{displayTrackInfos(spotifyTop.tracks.items, track)}</p1>
            ))}
        </div>
    )
}