package com.club35.api.controller;

import com.club35.api.dto.BlockDto;
import com.club35.api.dto.DocumentDto;
import com.club35.api.dto.HomePageDto;
import com.club35.api.dto.SectionDto;

import java.util.List;

@RestController
@RequestMapping("/api/pages")
@CrossOrigin // dev only
public class HomePageController {

    @GetMapping("/home")
    public HomePageDto home() {
        return new HomePageDto(
                "Клуб 35",
                "Интернет, игри и общност",
                List.of(
                        new SectionDto(
                                "about",
                                "За нас",
                                "Клуб 35 е място за срещи, игри и технологии."
                        ),
                        new SectionDto(
                                "services",
                                "Услуги",
                                "Интернет, компютърни игри и събития."
                        )
                )
        );
    }

    @GetMapping("/pages/index")
    public DocumentDto index() {
        return new DocumentDto(
                "index",
                "Клуб 35",
                List.of(new BlockDto("news", "html", "<b>Новини:</b><br>...</br>"),
                        new BlockDto("promo", "html", "<img src='/images/promo.gif' />")));
    }

}