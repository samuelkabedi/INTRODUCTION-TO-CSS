/* Button animation */
.button {
    background-color: #4CAF50;
    color: white;
    padding: 15px 20px;
    border: none;
    cursor: pointer;
    transition: background-color 0.5s ease-in-out, transform 0.3s ease-in-out;
}

.button:hover {
    background-color: #45a049;
    transform: scale(1.1);
}

/* Image animation */
.image-container img {
    transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out;
}

.image-container:hover img {
    opacity: 0.7;
    transform: rotate(10deg);
}