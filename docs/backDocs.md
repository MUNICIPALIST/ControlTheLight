Architecture Style and Patterns

https://systems.education/software_styles_and_patterns_with_cheatsheet#showmore



### Layered Arhitecture style

### Clean Architecture pattern

BACK/
├── cmd/
│   └── main.go            // Точка входа: запуск сервера, связывание слоёв
├── internal/
│   ├── domain/            // "Чистые" сущности (Case, Photo, Client) и интерфейсы
│   ├── repository/        // Код доступа к БД (SQL)
│   ├── services/          // Бизнес-логика, использующая репозитории
│   └── handlers/          // HTTP-контроллеры (эндпоинты)
└── pkg
    go.mod
    





DataBase structure

CREATE TABLE cases (
                       id SERIAL PRIMARY KEY,
                       title TEXT NOT NULL,
                       motor TEXT NOT NULL,
                       photoUrlCase TEXT,
                       manufacturingTime TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE TABLE photos (
                        id SERIAL PRIMARY KEY,
                        photoUrl TEXT NOT NULL
);
CREATE TABLE clients (
                         id SERIAL PRIMARY KEY,
                         fullName TEXT NOT NULL,
                         phoneNumber TEXT NOT NULL
);


