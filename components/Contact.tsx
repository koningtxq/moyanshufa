import React, { useState } from 'react';
import { MapPin, Phone, Clock, X } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Contact: React.FC = () => {
    const [showQR, setShowQR] = useState(false);

    return (
        <section className="py-20 px-6 bg-paper-bg" id="contact">
            <SectionTitle title="联系我们" subtitle="CONTACT & LOCATION" />

            <div className="max-w-2xl mx-auto">
                {/* Info Card */}
                <div className="w-full space-y-8">
                    <div className="bg-white p-8 shadow-lg border-l-4 border-seal-red rounded-sm">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div className="flex flex-col items-center text-center">
                                <MapPin className="text-seal-red mb-3" size={32} />
                                <h4 className="font-serif font-bold text-ink-black mb-2">地址</h4>
                                <p className="text-sm text-stone-600 leading-relaxed">
                                    广东省深圳市宝安区<br />
                                    圣安东尼奥科技园<br />
                                    墨颜书画工作室
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Phone className="text-seal-red mb-3" size={32} />
                                <h4 className="font-serif font-bold text-ink-black mb-2">电话</h4>
                                <p className="text-sm text-stone-600">
                                    13652361114
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Clock className="text-seal-red mb-3" size={32} />
                                <h4 className="font-serif font-bold text-ink-black mb-2">营业时间</h4>
                                <p className="text-sm text-stone-600">
                                    周二至周日<br />
                                    10:00 - 21:00
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setShowQR(true)}
                        className="w-full py-4 bg-ink-black text-white font-serif text-lg tracking-widest hover:bg-stone-800 transition-colors shadow-md"
                    >
                        预约试听
                    </button>
                </div>
            </div>

            {/* QR Code Modal */}
            {showQR && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowQR(false)}>
                    <div className="bg-white p-8 rounded-sm shadow-2xl max-w-sm w-full relative animate-in fade-in zoom-in duration-300" onClick={e => e.stopPropagation()}>
                        <button
                            onClick={() => setShowQR(false)}
                            className="absolute top-2 right-2 p-2 text-stone-400 hover:text-ink-black transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="text-center space-y-6">
                            <h3 className="text-2xl font-serif font-bold text-ink-black">预约试听</h3>
                            <div className="w-16 h-1 bg-seal-red mx-auto"></div>

                            <div className="bg-stone-100 p-4 inline-block rounded-sm">
                                <img
                                    src="/images/contact-qr.jpg"
                                    alt="预约二维码"
                                    className="w-48 h-48 object-contain mix-blend-multiply"
                                />
                            </div>

                            <p className="text-stone-600 text-sm leading-relaxed">
                                请扫描上方二维码<br />
                                添加老师微信进行预约
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;