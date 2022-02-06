import React, {useEffect, useState} from 'react';
import {albumService} from "../../services/album.service";
import {useParams} from "react-router-dom";
import Photos from "../../components/Photos/Photos";

const PhotosPage = () => {

    const {id} = useParams();

    const [photos, setPhotos] = useState([]);

    useEffect(() =>{
        albumService.getPhotoByAlbumsId(id).then(value => setPhotos([...value]))
    }, [id]);

    return (
        <div>
            {photos.map(photo => <Photos key={photo.id} photo={photo}/>)}
        </div>
    );
};

export default PhotosPage;