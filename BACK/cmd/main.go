package main

import (
	"curtains/internal/handlers"
	"curtains/internal/repository"
	"curtains/internal/services"
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

func main() {

	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found")
	}

	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	dbname := os.Getenv("DB_NAME")

	connStr := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal("Error connecting to DB:", err)
	}
	defer db.Close()

	caseRepo := repository.NewCaseRepository(db)
	photoRepo := repository.NewPhotoRepository(db)
	clientRepo := repository.NewClientRepository(db)

	caseService := services.NewCaseService(caseRepo)
	photoService := services.NewPhotoService(photoRepo)
	clientService := services.NewClientService(clientRepo)

	caseHandler := handlers.NewCaseHandler(caseService)
	photoHandler := handlers.NewPhotoHandler(photoService)
	clientHandler := handlers.NewClientHandler(clientService)

	http.HandleFunc("/cases", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodGet {
			caseHandler.GetCases(w, r)
		} else {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	})

	http.HandleFunc("/photos", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodGet {
			photoHandler.GetPhotos(w, r)
		} else {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	})

	http.HandleFunc("/clients", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodPost {
			clientHandler.AddClient(w, r)
		} else {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	})

	portServer := os.Getenv("PORT")
	if portServer == "" {
		portServer = "8080"
	}
	fmt.Println("Server running on port:", portServer)
	log.Fatal(http.ListenAndServe(":"+portServer, nil))
}
