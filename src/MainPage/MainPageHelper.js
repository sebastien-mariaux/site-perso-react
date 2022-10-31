import moment from 'moment'
import { birthDate, experienceStart } from '../data/profile';

export const getAge = () => {
  const today = moment();
  return today.diff(birthDate, 'years')
}

export const getExperience = () => {
  const today = moment();
  return Math.round(today.diff(experienceStart, 'years', true))
}