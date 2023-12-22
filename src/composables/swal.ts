import Swal from 'sweetalert2';

function useSwal () {
  const base = async (icon: 'success' | 'error', title: string, text: string) => await Swal.fire({
    title,
    text,
    icon,
  });

  const success = async (title: string, text: string) => await base('success', title, text);
  const error = async (title: string, text: string) => await base('error', title, text);

  return { success, error };
}

export { useSwal };
