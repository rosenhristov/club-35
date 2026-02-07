package com.club35.api.controller;


import com.club35.api.dto.PageDto;
import com.club35.api.dto.SectionDto;

import java.util.List;

// api/controller/PageController.java
@RestController
@RequestMapping("/api/pages")
@CrossOrigin // dev only
public class PageController {

    @GetMapping("/{slug}")
    public PageDto page(@PathVariable String slug) {
        return switch (slug) {
            case "home" -> home();
            case "services" -> services();
            case "contacts" -> contacts();
            default -> throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Page not found"
            );
        };
    }

    private PageDto home() {
        return new PageDto("home", "Клуб 35", "Интернет, игри и общност",
                List.of(new SectionDto("hero", "hero", "Добре дошли", "Клуб 35 е място за технологии и хора."),
                        new SectionDto("about", "text", "За нас", "Създаден като място за срещи и игри.")));
    }

    private PageDto services() {
        return new PageDto(
                "services",
                "Услуги",
                null,
                List.of(new SectionDto("services-list", "text", "Какво предлагаме",
                                      "Интернет, компютърни игри, събития.")));
    }

    private PageDto contacts() {
        return new PageDto(
                "contacts",
                "Контакти",
                null,
                List.of(new SectionDto("address", "text", "Адрес", "гр. София, ул. ..."
                        )
                )
        );
    }
}
