package com.club35.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NavItemDto {

    String id;
    String label;
    String path;
    int order;

}
