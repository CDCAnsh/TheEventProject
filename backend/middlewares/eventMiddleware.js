

const validateEventData = (req, res, next) => {
    // You can implement validation logic here using a library like Joi or express-validator
    // For simplicity, let's assume basic validation
    const { title, description, date, category, status } = req.body;
    if (!title || !description || !date || !category || !status) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    next();
};

export  { validateEventData};