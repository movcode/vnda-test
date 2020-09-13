// eslint-disable-next-line no-undef
export default (storage: Storage | null, processEnv: NodeJS.Process | null) => {
  const tokenFrontEnd = storage?.getItem('token')
  const tokenBackEnd = processEnv?.env?.TOKEN
  return !tokenFrontEnd ? tokenBackEnd : tokenFrontEnd
}
