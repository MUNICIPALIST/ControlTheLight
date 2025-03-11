package repository

import (
	"curtains/internal/domain"
	"database/sql"
	"fmt"
)

type PhotoRepository interface {
	GetAllPhotos() ([]domain.Photo, error)
}

type photoRepo struct {
	db *sql.DB
}

func NewPhotoRepository(db *sql.DB) PhotoRepository {
	return &photoRepo{db: db}
}

func (r *photoRepo) GetAllPhotos() ([]domain.Photo, error) {
	rows, err := r.db.Query(`
        SELECT id, photoUrl
        FROM photos
        ORDER BY id
    `)
	if err != nil {
		return nil, fmt.Errorf("error querying photos: %w", err)
	}
	defer rows.Close()

	var photos []domain.Photo
	for rows.Next() {
		var p domain.Photo
		if err := rows.Scan(&p.ID, &p.PhotoURL); err != nil {
			return nil, err
		}
		photos = append(photos, p)
	}
	return photos, nil
}
