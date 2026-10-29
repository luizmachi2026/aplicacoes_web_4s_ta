interface ImageCardProps {
    nome?: string;
    tamanho?: string;
    dataUpload?: string;
    src?: string;
}

export const ImageCard: React.FC <ImageCardProps>= ({nome, dataUpload, src, tamanho}: ImageCardProps) => {
    return(
        <div className="card relative bg-white rounded-md shadow-md transition-transform
        easy-in duration-300 transform hover:shadow-lg hover:-translate-y-2">
            <img src={src} className="h-56 w-full object-cover rounded-t-md" alt=""/>
            <div className="card-body p-4">
                <h5 className="text-lg font-semibold mb-2 text-gray-600">{nome}</h5>
                <p className="text-gray-600">{tamanho} </p>
                <p className="text-gray-600">{dataUpload} </p>
            </div>
        </div>
    )
}

//https://images.tcdn.com.br/img/img_prod/1379046/kit_placa_me_completo_mb_intel_031mxp_14232_1_20260114163023_d4c6d3ac97bc.jpeg