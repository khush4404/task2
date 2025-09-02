import axios from 'axios';

const SpaForm = ({ formData, setFormData }) => {
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData((prev) => ({
                ...prev,
                images: [...prev.images, ...Array.from(files)]
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('spa_name', formData.spa_name);
        form.append('city', formData.city);
        form.append('area', formData.area);
        form.append('price', formData.price);
        form.append('timing', formData.timing);
        formData.images.forEach((img) => form.append('images', img));
        try {
            await axios.post('http://20.193.149.47:2242/spas/vendor-spa-update-test/1', form);
        } catch (error) {
            console.error('Error submitting form:', error);
            // Optionally, show error to user
        }

    };

    return (
        <form className="flex flex-col gap-3 bg-[#f9f9f9] p-1.5 rounded-lg shadow-lg " onSubmit={handleSubmit}>
            <label className='felx flex-col font-bold'>Spa Name:
                <input className='mt-0.5 p-0.5 rounded-lg border border-[#ccc]' type="text" name="spa_name" value={formData.spa_name} onChange={handleChange} required />
            </label>
            <label className='felx flex-col font-bold'>City:
                <input className='mt-0.5 p-0.5 rounded-lg border border-[#ccc]' type="text" name="city" value={formData.city} onChange={handleChange} required />
            </label>
            <label className='felx flex-col font-bold'>Area:
                <input className='mt-0.5 p-0.5 rounded-lg border border-[#ccc]' type="text" name="area" value={formData.area} onChange={handleChange} required />
            </label>
            <label className='felx flex-col font-bold'>Images:
                <input className='mt-0.5 p-0.5 rounded-lg border border-[#ccc]' type="file" name="images" multiple accept="image/*" onChange={handleChange} />
            </label>
            <label className='felx flex-col font-bold'>Price:
                <input className='mt-0.5 p-0.5 rounded-lg border border-[#ccc]' type="number" name="price" value={formData.price} onChange={handleChange} required />
            </label>
            <label className='felx flex-col font-bold'>Timing:
                <input className='mt-0.5 p-0.5 rounded-lg border border-[#ccc]' type="time" name="timing" value={formData.timing} onChange={handleChange} required />
            </label>
            <button className='p-1.5 rounded-lg bg-[#fff] border ' type="submit">Submit</button>
        </form>
    );
};

export default SpaForm;
