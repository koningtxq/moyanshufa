import React from 'react';
import './h5-components.css';

const HeroH5: React.FC = () => {
    return (
        <div className="h5-hero">
            <div className="hero-bg">
                <img
                    src="/images/hero-bg.jpg"
                    alt="背景"
                    className="bg-image"
                />
            </div>

            <div className="hero-content">
                <div className="title-box">
                    <div className="seal">墨</div>
                    <h1 className="title">
                        墨颜<br />书画
                    </h1>
                </div>

                <p className="subtitle">
                    修身 · 养性 · 传承
                </p>

                <div className="divider"></div>

                <p className="studio-name">
                    袁凯工作室
                </p>
            </div>
        </div>
    );
};

export default HeroH5;
