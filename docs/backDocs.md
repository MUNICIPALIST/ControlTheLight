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








1. Prerequisites

Before you begin, make sure you have the following installed on your machine:
	•	Minikube (for running Kubernetes locally)
	•	kubectl (Kubernetes CLI tool)
	•	Docker (for building Docker images)


If Minikube is not installed, follow these steps:

For Linux (Debian/Ubuntu):
```
sudo apt-get update
sudo apt-get install -y apt-transport-https
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
chmod +x minikube
sudo mv minikube /usr/local/bin/
```

Start Minikube

run that command 
```
minikube start
```


Set up Docker in Minikube
```
eval $(minikube docker-env)
```

Build Docker Image

```
cd BACK
docker build -t curtainsback .
```

Apply Kubernetes Configurations
```
kubectl apply -f backend-deployment.yaml
kubectl apply -f backend-service.yaml
kubectl apply -f backend-configmap.yaml  
kubectl apply -f backend-secret.yaml  
```

Check if Your Pod is Running
```
kubectl get pods
```

Access Your Backend
```
minikube service backend-service --url
```

Stop Minikube
```
minikube stop
```


