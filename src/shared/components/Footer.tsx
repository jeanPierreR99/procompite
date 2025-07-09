import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-100  mt-10">
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">

                {/* Logo y descripción */}
                <div className="flex flex-col gap-3">
                    <img
                        src="./tambopata_logo_verde.webp"
                        alt="Logo Municipalidad"
                        className="h-24 w-auto"
                    />
                </div>

                {/* Enlaces útiles */}
                <div className="flex flex-col gap-2">
                    <h4 className="font-semibold mb-1">Enlaces útiles</h4>
                    <Link to="/" className="hover:underline">Inicio</Link>
                    <Link to="/" className="hover:underline">Requisitos</Link>
                    <Link to="/" className="hover:underline">Convocatorias</Link>
                    <Link to="/" className="hover:underline">Postulación</Link>
                    <Link to="/" className="hover:underline">Contacto</Link>
                </div>

                {/* Contacto */}
                <div className="flex flex-col gap-2">
                    <h4 className="font-semibold mb-1">Contacto</h4>
                    <p>Dirección: Av. Leon Velarde #123, Puerto Maldonado</p>
                    <p>Teléfono: (082) 123456</p>
                    <p>Email: informes@tambopata.gob.pe</p>
                </div>
            </div>

            {/* Derechos reservados */}
            <div className="bg-gray-200 text-center py-4 text-xs text-gray-600">
                © {new Date().getFullYear()} Municipalidad de Tambopata. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
