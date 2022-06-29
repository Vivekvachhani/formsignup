
import { showNotification } from '../shared/Notification';

export const getErrorMessage = (payload) => {
    if (!payload) return undefined;
    return !payload.__CANCEL__
      && ((
        payload.response
        && payload.response.data && payload.response.data.message
      ) || { _entity: 'Unknown error' });
  };
  


export const setErrorMessage = (err, setError, fieldMapper = {}, ignoreProperties = []) => {
    const _err = getErrorMessage(err);
    if (_err) {
      const errors = Object.keys(_err)
        .map(key => ({ name: fieldMapper[key], message: _err[key] }));
      if (setError) {
        errors.filter(error => error.name)
          .forEach(({ name, message }) => setError(name, { message }));
      }
      errors
        .filter(error => !error.name)
        .filter(error => !ignoreProperties.includes(error))
        .forEach(error => showNotification(error.message, 'error'));
    }
  };