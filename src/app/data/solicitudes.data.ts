import { Solicitud } from '../models/solicitud';

export const solicitudesPrueba: Solicitud[] = [
  {
    id: 1,
    titulo: 'Solicitud de certificado',
    descripcion: 'Solicito mi certificado de estudios.',
    tipo: 'Certificado',
    estado: 'Pendiente',
    fechaCreacion: '2026-09-22',
    estudianteId: 1
  },
  {
    id: 2,
    titulo: 'Consulta académica',
    descripcion: 'Consulta sobre mi situación académica.',
    tipo: 'Consulta',
    estado: 'Atendida',
    fechaCreacion: '2026-09-21',
    estudianteId: 2
  }
];