import { EstadoSolicitud, TipoSolicitud } from '../types/solicitud.types';

export interface Solicitud {
  id: number;
  titulo: string;
  descripcion: string;
  tipo: string;
  estado: string;
  fechaCreacion: string;
  estudianteId: number;
}