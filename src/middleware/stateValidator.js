import tv4 from 'tv4'
import stateSchema from 'middleware/stateSchema'

export default ({ dispatch, getState }) => next => action => {
  next(action)

  console.log(tv4.validate(getState(), stateSchema))
}