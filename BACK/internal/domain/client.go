package domain

type Client struct {
	ID          int    `json:"id"`
	FullName    string `json:"full_name"`
	PhoneNumber string `json:"phone_number"`
}
