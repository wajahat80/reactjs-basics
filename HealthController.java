package com.rwa.Controllers;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import org.springframework.stereotype.Component;

@Component
@Path("/health")
public class HealthController {
    @GET
    @Produces("application/json")
    public String health() {
        return "Jersey: Up and Running!";
    }
}