package domain

import "time"

type Case struct {
	ID                int       `json:"id"`
	Title             string    `json:"title"`
	Motor             string    `json:"motor"`
	PhotoURLCase      string    `json:"photoUrlCase"`
	ManufacturingTime time.Time `json:"manufacturingTime"`
}
