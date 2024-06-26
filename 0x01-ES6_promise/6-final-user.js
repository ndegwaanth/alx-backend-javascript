import signUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'

export default function handleProfileSignUp(firstName, lastName, fileName) {
  Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)]).then((values) => {
    return [{status: values[1].status, value: values[0]}];
  }).catch(values => {
    return [{status: values[1].status, value: values[1]}];
  });
}
