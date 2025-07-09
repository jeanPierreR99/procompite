import { useState } from 'react';

const newsList = [
    {
        id: 1,
        title: 'EL ACTO PROTOCOLAR DEL PRIMER PROCOMPITE',
        image: 'Recurso 54.png',
        date: 'Publicado el 24 de abril a las 8:45 p.m',
        content:
            'El acto protocolar del primer PROCOMPITE en Tambopata fue un hito lleno de emociones y promesas de transformación. Con la presencia de autoridades locales y emprendedores entusiastas, dimos inicio a una competencia que abrirá puertas al desarrollo y la innovación en nuestra provincia.',
    },
    {
        id: 2,
        title: 'Potencia tu futuro agropecuario.',
        image: 'Recurso 55.png',
        date: 'Publicado el 25 de abril a las 9:15 a.m',
        content:
            'La Municipalidad Provincial de Tambopata, a través de PROCOMPITE, está impulsando una serie de capacitaciones y actividades de sensibilización para empoderar a nuestros productores locales. Estas iniciativas buscan asegurar que todos tengan la oportunidad de participar exitosamente en el concurso PROCOMPITE, promoviendo un acceso equitativo a los recursos que transforman y dinamizan nuestra economía. ¡Juntos, construimos un desarrollo más fuerte y sostenible!',
    },
    {
        id: 3,
        title: 'Promoviendo en el marco de la ley N° 29337.',
        image: 'Recurso 56.png',
        date: 'Publicado el 26 de abril a las 11:00 a.m',
        content:
            'Productores locales iniciaron una nueva etapa de innovación con el acompañamiento técnico brindado por PROCOMPITE. Este nuevo ciclo fortalecerá capacidades y potenciará la sostenibilidad de sus negocios rurales.',
    },
    {
        id: 4,
        title: 'Comite evaluador de PROCOMPITE.',
        image: 'Recurso 57.png',
        date: 'Publicado el 27 de abril a las 3:00 p.m',
        content:
            `La Municipalidad Provincial de Tambopata, a través de PROCOMPITE, está
impulsando una serie de capacitaciones y actividades de sensibilización
para empoderar a nuestros productores locales. Estas iniciativas buscan
asegurar que todos tengan la oportunidad de participar exitosamente en el
concurso PROCOMPITE, promoviendo un acceso equitativo a los recursos
que transforman y dinamizan nuestra economía. ¡Juntos, construimos un
desarrollo más fuerte y sostenible! `,
    },
];

const Section3 = () => {
    const [selectedNews, setSelectedNews] = useState(newsList[0]);

    return (
        <div id='noticias' className="grid grid-cols-1 md:grid-cols-2 p-4 mt-10 gap-10 max-w-7xl mx-auto">
            {/* Columna izquierda - Noticia seleccionada */}
            <div>
                <h4 className="text-3xl text-orange-400 font-bold mb-5">Últimas Noticias</h4>
                <div className="group transition-all duration-300 hover:shadow-2xl rounded-lg overflow-hidden">
                    <img
                        src={selectedNews.image}
                        alt=""
                        className="w-full object-cover h-60 rounded-lg transform transition duration-500 group-hover:scale-105"
                    />
                    <span className="text-gray-400 px-4 text-sm block mt-2">{selectedNews.date}</span>
                    <div className="shadow-xl p-4 rounded-lg bg-white transition duration-300 group-hover:shadow-orange-100">
                        <h4 className="text-xl text-orange-400 font-bold">{selectedNews.title}</h4>
                        <p className="text-sm text-gray-600 text-justify">{selectedNews.content}</p>
                        <div className="flex justify-end text-orange-300 mt-2">
                            <a className="hover:text-orange-500 cursor-pointer transition-colors duration-300">
                                Leer más...
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Columna derecha - Lista de noticias */}
            <div className="space-y-4">
                {newsList
                    .filter((n) => n.id !== selectedNews.id)
                    .map((news) => (
                        <div
                            key={news.id}
                            onClick={() => setSelectedNews(news)}
                            className="cursor-pointer shadow-xl p-4 rounded-lg flex flex-col sm:flex-row gap-4 transition duration-300 hover:shadow-2xl hover:scale-[1.01] bg-white"
                        >
                            <img
                                src={news.image}
                                className="h-40 w-full sm:w-40 object-cover rounded-md transition-transform duration-500 hover:scale-105"
                                alt=""
                            />
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h4 className="text-xl text-orange-400 font-bold">{news.title}</h4>
                                    <p className="text-sm text-gray-600 text-justify line-clamp-4">{news.content}</p>
                                </div>
                                <div className="mt-2">
                                    <span className="text-gray-400 text-sm block">{news.date}</span>
                                    <div className="flex justify-end text-orange-300">
                                        <span className="hover:text-orange-500 transition-colors duration-300">Leer más...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Section3;
