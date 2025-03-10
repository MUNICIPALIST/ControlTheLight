package handlers

import (
	"curtains/internal/services"
	"encoding/json"
	"net/http"
)

type CaseHandler struct {
	service services.CaseService
}

func NewCaseHandler(s services.CaseService) *CaseHandler {
	return &CaseHandler{service: s}
}

func (h *CaseHandler) GetCases(w http.ResponseWriter, r *http.Request) {
	cases, err := h.service.GetCases()
	if err != nil {
		http.Error(w, "Error retrieving cases", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(cases)
}
