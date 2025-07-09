import { useState } from 'react';
import CardSection2 from './CardSection2';
import Modal from './modal/Modal';
import Categories from './modal/Categories';
import Bases from './modal/Bases';
import Cronograma from './modal/Cronograma';

const items = [
    {
        key: 'categorias',
        title: 'Categoría A y B',
        image: 'Recurso 53.png',
    },
    {
        key: 'bases',
        title: 'Bases del concurso',
        image: 'Recurso 52.png',
    },
    {
        key: 'cronograma',
        title: 'Cronograma',
        image: 'Recurso 51.png',
    },
];

const Section2 = () => {
    const [selected, setSelected] = useState<null | string>(null);

    const getTitle = () => {
        switch (selected) {
            case 'categorias':
                return 'Categorías de Cofinanciamiento';
            case 'bases':
                return 'Bases del Concurso';
            case 'cronograma':
                return 'Cronograma del Proceso';
            default:
                return '';
        }
    };

    return (
        <div className="relative z-10">
            {/* Banner principal */}
            <div className="relative text-white section-2 text-center px-6 py-20 overflow-hidden">
                <div className="absolute inset-0 bg-yellow-600 opacity-90 z-0" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h4 className="text-4xl font-bold mb-4">¿Qué es ProCompite?</h4>
                    <p className="text-lg leading-relaxed">
                        Los beneficiarios del PROCOMPITE son los agentes económicos organizados (AEOs) para realizar
                        un negocio financiado con los recursos PROCOMPITE. Estos agentes económicos pueden ser
                        personas naturales organizadas, organizaciones productoras, asociaciones, comités, debidamente
                        constituidas en Registros Públicos.
                    </p>
                </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-10 -mt-20 relative z-20">
                {items.map((it, index) => (
                    <CardSection2
                        key={index}
                        title={it.title}
                        image={it.image}
                        setOpen={() => setSelected(it.key)}
                    />
                ))}
            </div>

            {/* Modal */}
            <Modal isOpen={selected !== null} onClose={() => setSelected(null)} title={getTitle()}>
                {selected === 'categorias' && <Categories />}
                {selected === 'bases' && <Bases />}
                {selected === 'cronograma' && <Cronograma />}
            </Modal>
        </div>
    );
};

export default Section2;
