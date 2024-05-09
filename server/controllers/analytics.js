
const addAnalytic = async (req, res) => {
    const { endpoint, method } = req.body;
  
    try {
      // Store analytics data in MongoDB
      await prisma.analytics.create({
        data: {
          endpoint,
          method
        }
      });
  
      res.status(201).json({ message: 'Analytics data stored successfully' });
    } catch (error) {
      console.error('Error storing analytics data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

module.exports = {addAnalytic};
