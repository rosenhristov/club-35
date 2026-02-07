package com.club35.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PageDto {

    String slug;
    String title;
    String subtitle;
    List<SectionDto> sections;

}
