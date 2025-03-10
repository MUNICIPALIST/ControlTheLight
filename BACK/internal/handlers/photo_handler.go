package handlers

import (
	"curtains/internal/services"
	"encoding/json"
	"net/http"
)

type PhotoHandler struct {
	service services.PhotoService
}

func NewPhotoHandler(s services.PhotoService) *PhotoHandler {
	return &PhotoHandler{service: s}
}

func (h *PhotoHandler) GetPhotos(w http.ResponseWriter, r *http.Request) {
	photos, err := h.service.GetPhotos()
	if err != nil {
		http.Error(w, "Error retrieving photos", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(photos)
}
