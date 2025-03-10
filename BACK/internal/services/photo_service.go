package services

import (
	"curtains/internal/domain"
	"curtains/internal/repository"
)

type PhotoService interface {
	GetPhotos() ([]domain.Photo, error)
}

type photoService struct {
	repo repository.PhotoRepository
}

func NewPhotoService(repo repository.PhotoRepository) PhotoService {
	return &photoService{repo: repo}
}

func (s *photoService) GetPhotos() ([]domain.Photo, error) {
	return s.repo.GetAllPhotos()
}
