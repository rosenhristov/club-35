package com.club35.api.controller;

import com.club35.api.dto.NavItemDto;
import com.club35.api.dto.NavigationDto;

import java.util.List;

@RestController
@RequestMapping("/api/navigation")
@CrossOrigin
public class NavigationController {

    @GetMapping
    public NavigationDto navigation() {
        return new NavigationDto(List.of(
                new NavItemDto("home", "Начало", "/", 1),
                new NavItemDto("services", "Услуги", "/services", 2),
                new NavItemDto("contacts", "Контакти", "/contacts", 3)
        ));
    }

}
