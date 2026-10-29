'use client'

import {Template, ImageCard} from '@/components'
import { useState } from 'react';

export default function GaleriaPage(){

    const image1 = 'https://images.tcdn.com.br/img/img_prod/1379046/kit_placa_me_completo_mb_intel_031mxp_14232_1_20260114163023_d4c6d3ac97bc.jpeg';
    const image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_JkptFlmoYJ56ZFufDQA3hnwtAcsmOdprk4ii21hkscqUaQaFJNQJC0&s=10';
    
    const nome1 = 'Placa Mãe';
    const nome2 = 'Placa Vídeo';

    const [codigoImage, setCodigoImage] = useState<number>(1);
    const [urlImage, setUrlImage] = useState<string>(image1);

    const [nomeImage, setNomeImage] = useState<string>(nome1);

    function mudarImagem(){
        if(codigoImage == 1){
            setCodigoImage(2);
            setUrlImage(image2);
            setNomeImage(nome2);
        }
        else{
            setCodigoImage(1);
            setUrlImage(image1);
            setNomeImage(nome1);
        }

    }

    return(
        <Template>
            <button className="bg-gray-500" onClick={mudarImagem}>Clique para Mudar</button>
            <section className="grid grid-cols-5 gap-8">
                <ImageCard nome={nomeImage} tamanho="10mb" dataUpload='28/10/2026' src={urlImage}/>
                <ImageCard nome={nomeImage} tamanho="10mb" dataUpload='28/10/2026' src={urlImage}/>
                <ImageCard nome={nomeImage} tamanho="10mb" dataUpload='28/10/2026' src={urlImage}/>
            </section> 
        </Template>
    );
}

