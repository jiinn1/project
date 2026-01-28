FROM maven:3.9.9-eclipse-temurin-21 AS base
WORKDIR /app

FROM base AS dep
COPY pom.xml .
RUN mvn dependency:go-offline

FROM dep AS dev
COPY . .
EXPOSE 8080
CMD ["mvn", "spring-boot:run"]
