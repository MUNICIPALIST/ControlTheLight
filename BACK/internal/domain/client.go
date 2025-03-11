package domain

type Client struct {
	ID          int    `json:"id"`
	FullName    string `json:"fullName"`
	PhoneNumber string `json:"phoneNumber"`
}
