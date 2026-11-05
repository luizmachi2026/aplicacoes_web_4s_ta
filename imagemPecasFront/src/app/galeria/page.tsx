'use client'

import {Template, ImageCard} from '@/components'
import {Image} from '@/resources/image/image.resource'
import {useImageService} from '@/resources/image/image.service'
import { useState } from 'react';

export default function GaleriaPage(){
    const useService = useImageService();
    const [images, setImages] = useState<Image[]>([]);

    async function searchImages(){
        const result = await useService.buscar()
        setImages(result)
        console.table(result)
    }

    function renderImageCard(image: Image){
        return (
            <ImageCard key={image.url}
                       nome={image.name}
                       src={image.url}
                       tamanho={image.size}
                       dataUpload={image.uploadDate}
                       />
        )
    }

    function renderImageCards(){
        //return images.map(image => renderImageCard(image));
        return images.map(renderImageCard);
    }

    return(
        <Template>
            <button className="bg-gray-500" onClick={searchImages}>Clique para Mudar</button>
            <section className="grid grid-cols-5 gap-8">
                {
                    renderImageCards()
                }
            </section> 
        </Template>
    );
}

