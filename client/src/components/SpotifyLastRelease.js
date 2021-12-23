export default function SpotifyLastRelease(spotifyLastReleaseItem) {
    if (spotifyLastReleaseItem === null)
        return (null);
    console.log(spotifyLastReleaseItem)
    return (
        <div>
            <div>
                <center>
                    <img
                        src={spotifyLastReleaseItem.images[1].url}
                        alt="new"
                    />
                    <br />
                    <br />
                    <b>
                        <p1>
                            {spotifyLastReleaseItem.artists[0].name}
                        </p1>
                    </b>
                    <br />
                    <i>
                        <p1>
                            {spotifyLastReleaseItem.name}
                        </p1>
                    </i>
                    <br />
                    <i>
                        <p1>
                            Release date: {spotifyLastReleaseItem.release_date}
                        </p1>
                    </i>
                    <br />
                    <i>
                        <p1>
                            Total track: {spotifyLastReleaseItem.total_tracks}
                        </p1>
                    </i>
                </center>
            </div>
        </div>
    );
};