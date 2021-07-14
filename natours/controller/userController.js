const getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'all user',
  });
};

const createUser = (req, res) => {
  res.status(201).json({
    status: 'create success',
    data: 'new user',
  });
};

export { getAllUsers, createUser };
