import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import customFetch from './utils'
import { toast } from 'react-toastify'

export const useFetchTasks = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => customFetch.get('/'),
  })
  return { isLoading, data, isError }
}
export const useCreateTask = () => {
    const queryClient = useQueryClient()
    const { mutate: createTask, isLoading: createTaskLoading } = useMutation({
      mutationFn: (title) => customFetch.post('/', { title }),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['tasks'] })
        toast.success('New task has been added')
      },
      onError: (err) => toast.error(err.response.data.msg),
    })
    return { createTask, createTaskLoading}
}
export const useEditTask = () => {
  const queryClient = useQueryClient()
  const { mutate: changeTask } = useMutation({
    mutationFn: ({ taskId, isDone }) =>
      customFetch.patch(`/${taskId}`, { isDone }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['tasks'] }),
  })
  return { changeTask }
}
export const useDeleteTask = () => {
  const queryClient = useQueryClient()

  const { mutate: deleteTask, isLoading } = useMutation({
    mutationFn: (taskId) => customFetch.delete(`/${taskId}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['tasks'] }),
  })
  return { deleteTask, isLoading}
}
