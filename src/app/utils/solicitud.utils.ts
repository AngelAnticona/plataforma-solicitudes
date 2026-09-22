import { Solicitud } from '../models/solicitud';

export const obtenerSolicitudesPendientes = (
  solicitudes: Solicitud[]
): Solicitud[] => {
  return solicitudes.filter(
    solicitud => solicitud.estado === 'Pendiente'
  );
};

export const contarSolicitudesPorEstado = (
  solicitudes: Solicitud[],
  estado: Solicitud['estado']
): number => {
  let cantidad = 0;

  solicitudes.forEach(solicitud => {
    if (solicitud.estado === estado) {
      cantidad++;
    }
  });

  return cantidad;
};