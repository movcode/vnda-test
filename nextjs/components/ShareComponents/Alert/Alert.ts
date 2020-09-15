import Swal from 'sweetalert2'

export default ({
  Alert: (status: boolean, msg: string) => Swal.fire({
    position: 'top-end',
    icon: status ? 'success' : 'error',
    title: msg,
    showConfirmButton: false,
    timer: 1800
  }),

  AlertDelete: (callback: (id: string) => void, id: string) => Swal.fire({
    title: 'Atenção',
    text: 'Deseja realmente excluir este registro ?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim',
    cancelButtonText: 'Não'
  }).then((result) => {
    if (result.isConfirmed) {
      return callback(id)
    }
  })
})
