import db from "../config/db.js";

export const insertGame = (data, callback) => {
    const { title, genre, platform, price } = data;
    const query = "INSERT INTO games (title, genre, platform, price) VALUES (?, ?, ?, ?)";
    db.query(query, [title, genre, platform, price], callback);
};

export const getAllGames = (callback) => {
    const query = "SELECT * FROM games";
    db.query(query, callback);
};
