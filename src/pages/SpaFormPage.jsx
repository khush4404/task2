import { useState } from 'react';
import SpaForm from '../component/SpaForm';
import SpaPreview from '../component/SpaPreview';

const SpaFormPage = () => {
    const [formData, setFormData] = useState({
        spa_name: '',
        city: '',
        area: '',
        price: '',
        timing: '',
        images: []
    });

    return (
        <div className="flex sm:flex-row flex-col gap-2 p-2 justify-center align-center">
            <div className="flex-1 max-w-full sm:max-w-[400px] ">
                <SpaForm formData={formData} setFormData={setFormData} />
            </div>
            <div className="flex-1 max-w-full sm:max-w-[400px]">
                <SpaPreview formData={formData} />
            </div>
        </div>
    );
};

export default SpaFormPage;
