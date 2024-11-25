// backend/controllers/mainDashboardController.js
exports.getMainDashboard = async (req, res) => {
    try {
      // Implement logic to fetch and aggregate data for the main dashboard
      const data = {
        // Example data structure
        branches: [],
        socialMedia: {},
        cells: {}
      };
      res.json(data);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  