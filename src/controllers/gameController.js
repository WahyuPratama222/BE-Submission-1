import { insertGame, getAllGames } from "../models/game.js";

export const createGame = (req, res) => {
    const data = req.body;
    insertGame(data, (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Failed to insert game", error: err.message });
        }
        res.status(201).json({ message: "Game created successfully", data: { id: result.insertId, ...data } });
    });
};

export const getGames = (req, res) => {
    getAllGames((err, result) => {
        if (err) {
            return res.status(500).json({ message: "Failed to get games", error: err.message });
        }
        res.status(200).json({ message: "Games fetched successfully", data: result });
    });
};