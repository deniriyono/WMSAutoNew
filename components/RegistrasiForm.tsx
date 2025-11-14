import React from 'react';

const InputField = ({ label, id, type = "text", placeholder, required = false }: { label: string; id: string; type?: string; placeholder: string; required?: boolean; }) => (
    <div>
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input type={type} id={id} name={id} placeholder={placeholder} required={required} className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-brand-500 focus:border-brand-500" />
    </div>
);

const RegistrasiForm: React.FC<{onClose: () => void}> = ({onClose}) => {
    return (
        <form onSubmit={(e) => { e.preventDefault(); onClose(); /* Handle form submission */ }}>
            <div className="space-y-6">
                <div className="border-b dark:border-gray-700 pb-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Data Pelanggan</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <InputField label="Nama Pelanggan" id="nama_pelanggan" placeholder="cth: Budi Santoso" required />
                        <InputField label="Nomor Telepon" id="telepon" type="tel" placeholder="cth: 081234567890" required />
                        <InputField label="Alamat" id="alamat" placeholder="cth: Jl. Merdeka No. 10" />
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Data Kendaraan</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                         <InputField label="Nomor Polisi" id="no_polisi" placeholder="cth: B 1234 ABC" required />
                         <InputField label="Merk" id="merk" placeholder="cth: Toyota" required />
                         <InputField label="Tipe" id="tipe" placeholder="cth: Avanza Veloz" required />
                         <InputField label="Tahun" id="tahun" type="number" placeholder="cth: 2022" />
                         <InputField label="Warna" id="warna" placeholder="cth: Hitam Metalik" />
                         <InputField label="Nomor Rangka" id="no_rangka" placeholder="cth: MHFX..." />
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-4 border-t dark:border-gray-700">
                <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                    Batal
                </button>
                <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-brand-600 rounded-md hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500">
                    Simpan Data
                </button>
            </div>
        </form>
    );
};

export default RegistrasiForm;
