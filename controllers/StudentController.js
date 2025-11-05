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

export const createStudent = async (req, res) => {
  const { name, srcode, course } = req.body
  try {
    const insertId = await StudentModel.insertStudent(name, srcode, course)
    res.status(200).json({ success: true, message: insertId })
  } catch (e) {
    console.log(e)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
}

export const editStudent = async (req, res) => {
  const { name, srcode, course } = req.body
  const { studentId } = req.params
  try {
    const updatedId = await StudentModel.updateStudent(
      name,
      srcode,
      course,
      studentId
    )
    res.status(200).json({ success: true, message: updatedId })
  } catch (e) {
    console.log(e)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
}

export const deleteStudent = async (req, res) => {
  const { studentId } = req.params
  try {
    const deleteId = await StudentModel.deleteStudent(studentId)
    res.status(200).json({ success: true, message: deleteId })
  } catch (e) {
    console.log(e)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
}
