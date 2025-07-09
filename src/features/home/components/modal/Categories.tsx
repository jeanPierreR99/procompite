const Categories = () => (
    <div className="space-y-6">
        <p className="text-sm">
            Este programa contempla dos categorías diferenciadas por el número de socios, el monto de financiamiento
            y los requisitos técnicos y de experiencia.
        </p>

        <div className="overflow-x-auto">
            <table className="min-w-full border border-yellow-500 text-sm text-white bg-gray-900 rounded-lg">
                <thead className="bg-yellow-500 text-black text-xs uppercase">
                    <tr>
                        <th className="py-4 border-r border-yellow-300 px-4 text-left">Categoría</th>
                        <th className="py-4 border-r border-yellow-300 px-4 text-left">Miembros / Socios</th>
                        <th className="py-4 border-r border-yellow-300 px-4 text-left">Cofinanciamiento</th>
                        <th className="py-4 border-r border-yellow-300 px-4 text-left">Contrapartida de la AEO</th>
                        <th className="px-4 py-4 text-left">Otros Requisitos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t border-yellow-500">
                        <td className="px-4 py-3 font-semibold text-center">Categoría A</td>
                        <td className="px-4 py-3">Mínimo de 10 miembros activos organizados</td>
                        <td className="px-4 py-3">Desde S/ 80,000.00 hasta S/ 160,000.00</td>
                        <td className="px-4 py-3">No menor del 20% del monto total del plan de negocio conformada por una contrapartida monetaria, no menor al 5%</td>
                        <td className="px-4 py-3">Constituido como persona jurídidca. (formalizada en Registros Públicos) que desarrolla negocios en cualquiera de las Cadenas Productivas</td>
                    </tr>
                    <tr className="border-t border-yellow-500">
                        <td className="px-4 py-3 font-semibold text-center">Categoría B</td>
                        <td className="px-4 py-3">Mínimo de 2 miembros formalmente organizados</td>
                        <td className="px-4 py-3">Desde S/ 80,000.00 hasta S/ 350,000.00</td>
                        <td className="px-4 py-3">No menor al 30% del monto total del plan de negocio. Conformada por una contrapartida monetaria no menor del 10%</td>
                        <td className="px-4 py-3">Un año de existencia y que desarrollan negocios en cualquiera de las cadenas productivas priorizadas</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div>
            <h4 className="text-yellow-500 font-bold text-lg mt-6 mb-2">¿Quiénes pueden participar?</h4>
            <p className="text-sm">
                Personas naturales organizadas y personas jurídicas constituidas formalmente bajo modalidades reconocidas legalmente,
                que desarrollen actividades productivas o empresariales. Se priorizan propuestas con enfoque inclusivo, territorial
                y de sostenibilidad económica.
            </p>
        </div>
    </div>
);

export default Categories;
