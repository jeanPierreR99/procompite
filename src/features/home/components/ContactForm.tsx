
const ContactForm = () => {
    return (
        <section className="bg-gray-50 mt-10" id="contacto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Imagen izquierda */}
                <div className="hidden md:block">
                    <img
                        src="./Recurso 69.png"
                        alt="Persona contactando"
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Formulario */}
                <div className=" p-8  w-full">
                    <h2 className="text-3xl font-bold text-green-600 mb-6">Contáctanos</h2>
                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nombres completos</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="mt-1 block w-full bg-gray-200 p-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                placeholder="Ej: Juan Pérez"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="mt-1 block w-full p-2 bg-gray-200 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                placeholder="Ej: juanperez@gmail.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Celular</label>
                            <input
                                type="tel"
                                name="phone"
                                pattern="[0-9]{9}"
                                required
                                className="mt-1 block w-full bg-gray-200 p-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                placeholder="Ej: 987654321"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Mensaje</label>
                            <textarea
                                name="message"
                                rows={4}
                                required
                                className="mt-1 block w-full rounded-md p-2 bg-gray-200 border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                placeholder="Escribe tu mensaje aquí..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700 transition duration-300"
                        >
                            Enviar mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
