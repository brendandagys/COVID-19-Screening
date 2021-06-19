import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '../state' // from reducers/index.ts

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
