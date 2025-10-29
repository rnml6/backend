import * as StudentModel from '../models/StudentModel.js'

export const fetchStudents = async (req, res) => {
  try {
    const books = await StudentModel.getStudents()
    res.status(200).json({ success: true, message: books })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    })
  }
}
