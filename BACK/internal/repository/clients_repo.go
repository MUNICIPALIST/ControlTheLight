package repository

import (
	"curtains/internal/domain"
	"database/sql"
	"fmt"
)

type ClientRepository interface {
	CreateClient(c *domain.Client) error
}

type clientRepo struct {
	db *sql.DB
}

func NewClientRepository(db *sql.DB) ClientRepository {
	return &clientRepo{db: db}
}

func (r *clientRepo) CreateClient(c *domain.Client) error {
	query := `
        INSERT INTO clients (fullName, phoneNumber)
        VALUES ($1, $2)
        RETURNING id
    `
	if err := r.db.QueryRow(query, c.FullName, c.PhoneNumber).Scan(&c.ID); err != nil {
		return fmt.Errorf("error inserting client: %w", err)
	}
	return nil
}
