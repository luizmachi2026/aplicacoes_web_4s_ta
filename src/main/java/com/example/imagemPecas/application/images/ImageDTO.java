package com.example.imagemPecas.application.images;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class ImageDTO {
    private String url;
    private String name;
    private String extension;
    private String size;
    private LocalDate uploadDate;
}
