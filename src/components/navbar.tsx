import React, { useState } from 'react'
import { Translation } from 'translations/translations';
import en from 'translations/en';
import mgl from 'translations/mgl';

function Navbar() {
    const [language, setLanguage] = useState('mgl')
    const translation: Translation = language === 'mgl' ? mgl : en
    return (
        <div className='w-full sticky bg-white py-5 px-10 flex justify-between border border-black'>
            <p className='font-bold text-3xl text-brand'>{translation.title}</p>
            <div className='ml-4'>
                <label htmlFor='language' className='sr-only'>
                    {translation.chooseLanguage}
                </label>
                <select
                    id='language'
                    name='language'
                    className='px-2 py-1 border rounded'
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                >
                    <option value='mgl'>{translation.mongolian}</option>
                    <option value='en'>{translation.english}</option>
                    {/* Add more language options as needed */}
                </select>
            </div>
        </div>
    )
}

export default Navbar