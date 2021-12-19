import { connectSpotify } from "../../controller/connectApi";

export default function Spotify() {

    const onClickSpotify = () => {
        return (connectSpotify())
    }

    return (
        <div>
            <center>
                {/* <Button startIcon={<FaSpotify />} onClick={onClickSpotify} /> */}
                {connectSpotify()}
            </center>
        </div>
    );
}