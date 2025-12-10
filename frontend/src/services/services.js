import api from './api'

/* ---------------- MEMBERS ---------------- */
export const getMembers = () => api.get('?action=getMembers')
export const addMember = (member) => api.post('?action=addMember', member)
export const deleteMember = (id) => api.post('?action=deleteMember', { id })

/* ---------------- TRAINERS ---------------- */
export const getTrainers = () => api.get('?action=getTrainers')
export const addTrainer = (trainer) => api.post('?action=addTrainer', trainer)
export const editTrainer = (trainer) => api.post('?action=editTrainer', trainer)
export const deleteTrainer = (id) => api.post('?action=deleteTrainer', { id })

/* ---------------- PLANS ---------------- */
export const getPlans = () => api.get('?action=getPlans')
export const addPlan = (plan) => api.post('?action=addPlan', plan)
export const deletePlan = (id) => api.post('?action=deletePlan', { id })

/* ---------------- ATTENDANCE ---------------- */
export const getAttendance = () => api.get('?action=getAttendance')
export const addAttendance = (attendance) => api.post('?action=addAttendance', attendance)

/* ---------------- PAYMENTS ---------------- */
export const getPayments = () => api.get('?action=getPayments')
export const addPayment = (payment) => api.post('?action=addPayment', payment)

/* ---------------- PROFILE ---------------- */
export const getProfile = (userId) => api.post('?action=getProfile', { user_id: userId })

/* ---------------- DASHBOARD STATS ---------------- */
export const getDashboardStats = () => api.get('?action=getDashboardStats')
