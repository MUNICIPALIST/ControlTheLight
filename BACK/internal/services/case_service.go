package services

import (
	"curtains/internal/domain"
	"curtains/internal/repository"
)

type CaseService interface {
	GetCases() ([]domain.Case, error)
}

type caseService struct {
	repo repository.CaseRepository
}

func NewCaseService(repo repository.CaseRepository) CaseService {
	return &caseService{repo: repo}
}

func (s *caseService) GetCases() ([]domain.Case, error) {
	return s.repo.GetAllCases()
}
