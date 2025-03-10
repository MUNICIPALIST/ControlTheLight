package domain

import "time"

type Case struct {
	ID                int       `json:"id"`
	Title             string    `json:"title"`
	Motor             string    `json:"motor"`
	PhotoURLCase      string    `json:"photo_url_case"` // основное фото кейса
	ManufacturingTime time.Time `json:"manufacturing_time"`
}
