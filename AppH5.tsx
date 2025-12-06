import React, { useState } from 'react';
import HeroH5 from './components/h5/HeroH5';
import MasterProfileH5 from './components/h5/MasterProfileH5';
import GalleryH5 from './components/h5/GalleryH5';
import CoursesH5 from './components/h5/CoursesH5';
import ContactH5 from './components/h5/ContactH5';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './h5.css';

const AppH5: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const pages = [
        { component: HeroH5, name: '首页' },
        { component: MasterProfileH5, name: '主理人' },
        { component: GalleryH5, name: '作品' },
        { component: CoursesH5, name: '课程' },
        { component: ContactH5, name: '联系' }
    ];

    const nextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const CurrentComponent = pages[currentPage].component;

    return (
        <div className="h5-container">
            <div className="h5-page">
                <CurrentComponent />

                <div className="page-indicator">
                    {pages.map((_, index) => (
                        <div
                            key={index}
                            className={`indicator-dot ${index === currentPage ? 'active' : ''}`}
                            onClick={() => setCurrentPage(index)}
                        />
                    ))}
                </div>

                {currentPage > 0 && (
                    <button className="nav-btn nav-btn-left" onClick={prevPage}>
                        <ChevronLeft size={24} />
                    </button>
                )}
                {currentPage < pages.length - 1 && (
                    <button className="nav-btn nav-btn-right" onClick={nextPage}>
                        <ChevronRight size={24} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default AppH5;
