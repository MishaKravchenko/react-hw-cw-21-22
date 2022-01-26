import React, {useEffect, useState} from 'react';
import {albumService} from "../../services/album.service";
import {Outlet, useParams} from "react-router-dom";
import Albums from "../../components/Albums/Albums";

const AlbumsPage = () => {

    const {id} = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumService.getAlbumsById(id).then(value => setAlbums([...value]))
    }, [id])

    return (
        <div>
            <div>
                {albums.map(album => <Albums key={album.id} album={album}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>

    );
};

export default AlbumsPage;