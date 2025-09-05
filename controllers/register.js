import Register from "../models/RegisterInvasion.js";

// @desc    Create a new registration
// @route   POST /api/register
export const createRegistration = async (req, res) => {
  try {
    const { name, email, phone, church, event } = req.body;

    const existing = await Register.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "You already registered." });
    }

    const newRegister = await Register.create({ name, email, phone, church, event });

    res.status(201).json({newRegister, message: "Registration successful"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all registrations
// @route   GET /api/register
export const getRegistrations = async (req, res) => {
  try {
    const registrations = await Register.find().sort({ createdAt: -1 });
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
