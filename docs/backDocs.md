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
    
