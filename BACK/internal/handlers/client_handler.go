package handlers

import (
	"curtains/internal/domain"
	"curtains/internal/services"
	"encoding/json"
	"net/http"
)

type ClientHandler struct {
	service services.ClientService
}

func NewClientHandler(s services.ClientService) *ClientHandler {
	return &ClientHandler{service: s}
}

func (h *ClientHandler) AddClient(w http.ResponseWriter, r *http.Request) {
	var client domain.Client
	if err := json.NewDecoder(r.Body).Decode(&client); err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}
	if err := h.service.AddClient(&client); err != nil {
		http.Error(w, "Error adding client", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(client)
}
