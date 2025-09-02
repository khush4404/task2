import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const SpaPreview = ({ formData }) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-white border-b">
                <span className="text-xl font-bold text-purple-600">Trakky</span>
                <span className="material-icons text-gray-500">account_circle</span>
            </div>
            {/* Image Carousel */}
            <div className="relative">
                {formData.images && formData.images.length > 0 ? (
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation
                        modules={[Navigation]}
                        className="h-56 w-full"
                    >
                        {formData.images.map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <img
                                    src={URL.createObjectURL(img)}
                                    alt={`Spa ${idx}`}
                                    className="w-full h-56 object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="w-full h-56 bg-gray-100 flex items-center justify-center text-gray-400">No Image</div>
                )}
                <button className="absolute bottom-2 right-2 bg-gray-800 bg-opacity-70 text-white px-3 py-1 rounded flex items-center text-sm">
                    <span className="material-icons mr-1">photo_library</span> more photos
                </button>
            </div>
            {/* Info Section */}
            <div className="px-4 py-3">
                <div className="text-xs text-gray-500 mb-1">Opens {formData.timing ? `${formData.timing} - 9 PM` : '11 AM - 9 PM'}</div>
                <div className="text-lg font-semibold text-gray-800">{formData.spa_name || 'The Spa'}</div>
                <div className="text-sm text-gray-600">{formData.area || 'Area'}, {formData.city || 'Ahmedabad'}</div>
                <div className="text-sm text-gray-800 mt-1">₹ {formData.price || '1800'} Onwards</div>
                {/* Rating */}
                <div className="flex items-center mt-2">
                    <span className="bg-purple-600 text-white rounded-full px-2 py-0.5 text-xs font-bold mr-2">4.48</span>
                    <span className="text-xs text-gray-600">(15 reviews)</span>
                </div>
            </div>
            {/* Actions */}
            <div className="flex items-center justify-end px-4 pb-3 space-x-3">
                <button className="text-gray-500 hover:text-gray-700">
                    <span className="material-icons">share</span>
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                    <span className="material-icons">favorite_border</span>
                </button>
            </div>
        </div>
    );
};

export default SpaPreview;
