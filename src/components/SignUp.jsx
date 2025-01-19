
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Ensure email exists and is valid
  if (!formData.email || !formData.email.trim()) {
    setError("Email is required");
    return;
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    setError("Please enter a valid email address");
    return;
  }

  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, formData);
    // Handle successful signup
  } catch (err) {
    setError(err.response?.data?.message || "Signup failed");
  }
};

<input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  className="input input-bordered"
  placeholder="Email"
  required
/>
