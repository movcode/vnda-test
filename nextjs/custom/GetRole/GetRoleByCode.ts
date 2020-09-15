const GetRoleByCode = (code: string) => {
  switch (code) {
    case '0': return 'Agente'
    case '1': return 'Gestor'
    case '2': return 'Local'
  }
}

export default GetRoleByCode
