package com.example.imagemPecas.domain.service;

import com.example.imagemPecas.domain.entity.Image;

import java.util.Optional;

public interface ImageService {
    Image save (Image image);

    Optional<Image> getById(String id);
}
