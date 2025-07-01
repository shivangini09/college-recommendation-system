const db = require("../db"); // assuming db.js exports your SQL connection

// Get unique list of colleges
exports.getColleges = (req, res) => {
    const sql = "SELECT DISTINCT Institute FROM branches ORDER BY Institute ASC";

    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: "Database error" });
        res.json(result.map(r => r.Institute));
    });
};

// Get branches for a selected college
exports.getBranches = (req, res) => {
    const { college } = req.query;

    if (!college) return res.status(400).json({ error: "College parameter required" });

    const sql = "SELECT DISTINCT Branch FROM branches WHERE Institute = ? ORDER BY Branch ASC";
    
    db.query(sql, [college], (err, result) => {
        if (err) return res.status(500).json({ error: "Database error" });
        res.json(result.map(r => r.Branch));
    });
};

// Compare two branches (same/different colleges or branches)
exports.compareBranches = (req, res) => {
    const { college1, branch1, college2, branch2 } = req.body;

    if (!college1 || !branch1 || !college2 || !branch2) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const sql = `
        SELECT Institute, Branch, avg_package, placement_rate, difficulty_level, OPEN_GEN, CLOSE_GEN
        FROM branches
        WHERE (Institute = ? AND Branch = ?)
           OR (Institute = ? AND Branch = ?)
    `;

    db.query(sql, [college1, branch1, college2, branch2], (err, results) => {
        if (err) return res.status(500).json({ error: "Database error" });

        if (results.length < 2) {
            return res.status(404).json({ error: "One or both branch details not found" });
        }

        res.json({
            branch1: results.find(r => r.Institute === college1 && r.Branch === branch1),
            branch2: results.find(r => r.Institute === college2 && r.Branch === branch2)
        });
    });
};
