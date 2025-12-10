import api from './api'

/* ---------------- MEMBERS ---------------- */
export const getMembers = async () => {
  const res = await api.get('?action=getMembers')
  return res.data
}
export const addMember = async (member) => {
  const res = await api.post('?action=addMember', member)
  return res.data
}
export const deleteMember = async (id) => {
  const res = await api.post('?action=deleteMember', { id })
  return res.data
}

/* ---------------- TRAINERS ---------------- */
export const getTrainers = async () => {
  const res = await api.get('?action=getTrainers')
  return res.data
}
export const addTrainer = async (trainer) => {
  const res = await api.post('?action=addTrainer', trainer)
  return res.data
}
export const editTrainer = async (trainer) => {
  const res = await api.post('?action=editTrainer', trainer)
  return res.data
}
export const deleteTrainer = async (id) => {
  const res = await api.post('?action=deleteTrainer', { id })
  return res.data
}

/* ---------------- PLANS ---------------- */
export const getPlans = async () => {
  const res = await api.get('?action=getPlans')
  return res.data
}
export const addPlan = async (plan) => {
  const res = await api.post('?action=addPlan', plan)
  return res.data
}
export const deletePlan = async (id) => {
  const res = await api.post('?action=deletePlan', { id })
  return res.data
}

/* ---------------- ATTENDANCE ---------------- */
export const getAttendance = async () => {
  const res = await api.get('?action=getAttendance')
  return res.data
}
export const addAttendance = async (attendance) => {
  const res = await api.post('?action=addAttendance', attendance)
  return res.data
}

/* ---------------- PAYMENTS ---------------- */
export const getPayments = async () => {
  const res = await api.get('?action=getPayments')
  return res.data
}
export const addPayment = async (payment) => {
  const res = await api.post('?action=addPayment', payment)
  return res.data
}

/* ---------------- PROFILE ---------------- */
export const getProfile = async (userId) => {
  const res = await api.post('?action=getProfile', { user_id: userId })
  return res.data
}

/* ---------------- DASHBOARD STATS ---------------- */
export const getDashboardStats = async () => {
  const res = await api.get('?action=getDashboardStats')
  return res.data
}
