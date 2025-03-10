package services

import (
	"curtains/internal/domain"
	"curtains/internal/repository"
)

type ClientService interface {
	AddClient(c *domain.Client) error
}

type clientService struct {
	repo repository.ClientRepository
}

func NewClientService(repo repository.ClientRepository) ClientService {
	return &clientService{repo: repo}
}

func (s *clientService) AddClient(c *domain.Client) error {
	return s.repo.CreateClient(c)
}
