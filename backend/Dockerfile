FROM eclipse-temurin:21-jdk-alpine AS base
RUN apk add --no-cache bash curl


FROM base AS dev
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

RUN ./mvnw -B -q dependency:go-offline


ENTRYPOINT ["./mvnw"]
CMD ["spring-boot:run"]