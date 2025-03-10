package repository

import (
	"curtains/internal/domain"
	"database/sql"
	"fmt"
)

type CaseRepository interface {
	GetAllCases() ([]domain.Case, error)
}

type caseRepo struct {
	db *sql.DB
}

func NewCaseRepository(db *sql.DB) CaseRepository {
	return &caseRepo{db: db}
}

func (r *caseRepo) GetAllCases() ([]domain.Case, error) {
	rows, err := r.db.Query(`
        SELECT id, title, motor, photo_url_case, manufacturing_time
        FROM cases
        ORDER BY id
    `)
	if err != nil {
		return nil, fmt.Errorf("error querying cases: %w", err)
	}
	defer rows.Close()

	var cases []domain.Case
	for rows.Next() {
		var c domain.Case
		if err := rows.Scan(&c.ID, &c.Title, &c.Motor, &c.PhotoURLCase, &c.ManufacturingTime); err != nil {
			return nil, err
		}
		cases = append(cases, c)
	}
	return cases, nil
}
