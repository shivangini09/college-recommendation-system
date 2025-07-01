const db = require("../config/db");

// To select colleges and branch
exports.getColleges = (req, res) => {
    const sql = "SELECT DISTINCT College_name FROM college_branch_data ORDER BY College_name ASC";

    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: "Database error" });
        res.json(result.map(r => r.College_name));
    });
};



// Get branches for selected college
exports.getBranches = (req, res) => {
    const { college } = req.query;
    if (!college) return res.status(400).json({ error: "College parameter required" });

    const sql = "SELECT Branch_name FROM branches WHERE College_name = ? ORDER BY Branch_name ASC";

    db.query(sql, [college], (err, result) => {
        if (err) return res.status(500).json({ error: "Database error" });
        res.json(result.map(r => r.Branch_name));
    });
};

// Compare two branches (same/different colleges)
exports.compareBranches = (req, res) => {
    const { college1, branch1, college2, branch2 } = req.query;  // For GET request, use req.query

    if (!college1 || !branch1 || !college2 || !branch2) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const sql = `
        SELECT College_name, Branch_name, OR_General, CR_General, avg_package, placement_rate, difficulty_level
        FROM branches
        WHERE (College_name = ? AND Branch_name = ?)
           OR (College_name = ? AND Branch_name = ?)
    `;

    db.query(sql, [college1, branch1, college2, branch2], (err, results) => {
        if (err) return res.status(500).json({ error: "Database error" });

        if (results.length < 1) {
            return res.status(404).json({ error: "One or both branch details not found" });
        }

        res.json(results);  // Frontend is expecting an array for comparison
    });
};
