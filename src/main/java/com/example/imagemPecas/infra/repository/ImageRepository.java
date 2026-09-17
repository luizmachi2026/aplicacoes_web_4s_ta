package com.example.imagemPecas.infra.repository;

import com.example.imagemPecas.domain.entity.Image;
import com.example.imagemPecas.domain.enums.ImageExtension;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface ImageRepository extends JpaRepository<Image, String>,
        JpaSpecificationExecutor<Image> {

    /**
     *
      * @param extension
     * @param query
     * @return
     * SELECT * FROM IMAGE WHERE 1 = 1 AND EXTENSION = 'PNG' AND ( NAME LIKE 'QUERY'
     * OR TAGS LIKE 'QUERY')
     *
     *
     */

    default List<Image> findByExtensionAndNameOrTagsLike(ImageExtension extension,
                                                         String query){
        return findAll();
    }

}
