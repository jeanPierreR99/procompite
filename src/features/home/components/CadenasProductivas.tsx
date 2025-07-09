
const CadenasProductivas = () => {
    return (
        <div className="overflow-x-auto relative text-gray-700 mt-10 shadow-xl shadow-green-700">
            <h2 className="text-3xl font-bold text-white mb-4">Cadenas Productivas</h2>
            <table className="min-w-full border border-green-700 bg-white rounded shadow-lg overflow-hidden">
                <thead className="bg-green-600 text-white">
                    <tr>
                        <th className="border border-green-700 px-4 py-2 text-left">Sector</th>
                        <th className="border border-green-700 px-4 py-2 text-left">Cadena productiva / Actividad</th>
                        <th className="border border-green-700 px-4 py-2 text-left">Producto / Servicio</th>
                    </tr>
                </thead>
                <tbody className="text-sm text-green-800">
                    <tr className="hover:bg-green-50">
                        <td className="border border-green-300 px-4 py-2 font-bold text-green-500" rowSpan={7}>Agroindustria</td>
                        <td className="border border-green-300 px-4 py-2">Cacao</td>
                        <td className="border border-green-300 px-4 py-2">Manteca, pasta, chocolate biter, licor y derivados</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                        <td className="border border-green-300 px-4 py-2 bg-green-100">Castaña</td>
                        <td className="border border-green-300 px-4 py-2 bg-green-100">Manteca, harina, snack, jabones y derivados</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                        <td className="border border-green-300 px-4 py-2">Plátano</td>
                        <td className="border border-green-300 px-4 py-2">Harina, hojuelas y derivados</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                        <td className="border border-green-300 px-4 py-2 bg-green-100">Copoazu</td>
                        <td className="border border-green-300 px-4 py-2 bg-green-100">Pulpa, chocolate biter, manteca, confiteria, jaleas, mermeladas y derivados</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                        <td className="border border-green-300 px-4 py-2">Palmeras</td>
                        <td className="border border-green-300 px-4 py-2">Pulpa de aguaje, acai, ungurahui, pulpa, jugos, aceites y derivados</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                        <td className="border border-green-300 px-4 py-2 bg-green-100">Vacunos</td>
                        <td className="border border-green-300 px-4 py-2 bg-green-100">Carne de vacuno, charcutería y derivados de leche</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                        <td className="border border-green-300 px-4 py-2">Yuca</td>
                        <td className="border border-green-300 px-4 py-2">Harina, fariña, hojuelas y derivados</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                        <td className="border border-green-300 px-4 py-2 font-semibold text-green-500" rowSpan={2}>Turismo</td>
                        <td className="border border-green-300 px-4 py-2 bg-green-100">Turismo rural</td>
                        <td className="border border-green-300 px-4 py-2 bg-green-100">Hospedajes rurales, servicios de ecoturismo y de aventura</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                        <td className="border border-green-300 px-4 py-2 ">Artesanía</td>
                        <td className="border border-green-300 px-4 py-2 ">Vestimenta, tejidos, accesorios en madera y no maderable</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CadenasProductivas;
