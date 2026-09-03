package com.example.imagemPecas.domain.enums;

import org.springframework.http.MediaType;
import java.util.Arrays;

public enum ImageExtension {
    PNG(MediaType.IMAGE_PNG),
    JPG(MediaType.IMAGE_JPEG),
    GIF(MediaType.IMAGE_GIF);

    private final MediaType mediaType;

    ImageExtension(MediaType mediaType){
        this.mediaType = mediaType;
    }

    public static ImageExtension valueof(MediaType mediaType){
        return Arrays.stream(values())
                .filter(ie -> ie.mediaType.equals(mediaType))
                .findFirst()
                .orElse(null);
    }
}
