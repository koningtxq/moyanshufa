import React, { useState } from 'react';
import { MapPin, Phone, Clock, X } from 'lucide-react';
import './h5-components.css';

const ContactH5: React.FC = () => {
    const [showQR, setShowQR] = useState(false);

    return (
        <div className="h5-contact">
            <h2 className="page-title">联系我们</h2>
            <p className="page-subtitle">CONTACT</p>

            <div className="contact-card">
                <div className="contact-item">
                    <MapPin className="icon" size={32} />
                    <div className="item-content">
                        <h4 className="item-title">地址</h4>
                        <p className="item-text">
                            广东省深圳市宝安区<br />
                            圣安东尼奥科技园<br />
                            墨颜书画工作室
                        </p>
                    </div>
                </div>

                <div className="contact-item">
                    <Phone className="icon" size={32} />
                    <div className="item-content">
                        <h4 className="item-title">电话</h4>
                        <p className="item-text">13652361114</p>
                    </div>
                </div>

                <div className="contact-item">
                    <Clock className="icon" size={32} />
                    <div className="item-content">
                        <h4 className="item-title">营业时间</h4>
                        <p className="item-text">
                            周二至周日<br />
                            10:00 - 21:00
                        </p>
                    </div>
                </div>
            </div>

            <button
                className="booking-btn"
                onClick={() => setShowQR(true)}
            >
                预约试听
            </button>

            {showQR && (
                <div className="modal-overlay" onClick={() => setShowQR(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button
                            className="close-btn"
                            onClick={() => setShowQR(false)}
                        >
                            <X size={24} />
                        </button>

                        <h3 className="modal-title">预约试听</h3>
                        <div className="modal-divider"></div>

                        <div className="qr-container">
                            <img
                                src="/images/contact-qr.jpg"
                                alt="预约二维码"
                                className="qr-image"
                            />
                        </div>

                        <p className="modal-text">
                            请扫描上方二维码<br />
                            添加老师微信进行预约
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactH5;
