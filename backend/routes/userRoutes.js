const express = require('express')
const router = express.Router()
const { registerUser, 
        loginUser, 
        getMe,
        searchUser,
        loadRandUser,
      editUser,
      addClasses,
       deleteUser,
      } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.get('/searchUser', searchUser)
router.get('/loadRandUser', loadRandUser)
router.post('/editUser', editUser) // NEEDS TO IMPLEMENT put
router.post('/addClasses', addClasses)
router.delete('/deleteUser', deleteUser)


module.exports = router
