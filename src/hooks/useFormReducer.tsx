import { Dispatch, useReducer } from 'react'

const useFormReducer = <T extends {}>(
	formState = {} as T
): { inputs: T; dispatch: Dispatch<{ [key: string]: string }> } => {
	const [inputs, dispatch] = useReducer(
		(curVal: T, newVal: { [key: string]: string }) => ({ ...curVal, ...newVal }),
		formState
	)
	return { inputs, dispatch }
}

export default useFormReducer
