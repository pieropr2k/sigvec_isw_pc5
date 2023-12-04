package uni.isw.sigvec_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class SigvecBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SigvecBackendApplication.class, args);
	}

        @Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
                            registry.addMapping("/**")
                                    .allowedOrigins("http://localhost:4200")
                                    .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Permitir métodos específicos;
                                    .allowedHeaders("*"); // Cabeceras permitidas, puedes ajustarlas según necesites
                        }
		};
	}
}
