import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userActionCreators } from '../state'
import { questionActionCreators } from '../state'
import { submissionActionCreators } from '../state'

export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => {
    return bindActionCreators(
      {
        ...userActionCreators,
        ...questionActionCreators,
        ...submissionActionCreators,
      },
      dispatch
    )
  }, [dispatch])
}
