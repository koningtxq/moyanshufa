import React, { useState } from 'react';
import { MapPin, Phone, Clock, X } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Contact: React.FC = () => {
    const [showQR, setShowQR] = useState(false);

    return (
        <section className="py-20 px-6 bg-paper-bg" id="contact">
            <SectionTitle title="联系我们" subtitle="CONTACT & LOCATION" />

            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
                {/* Info Card */}
                <div className="w-full md:w-1/3 space-y-8">
                    <div className="bg-white p-6 shadow-sm border-l-4 border-seal-red">
                        <div className="flex items-start gap-4 mb-4">
                            <MapPin className="text-seal-red mt-1 shrink-0" size={20} />
                            <div>
                                <h4 className="font-serif font-bold text-ink-black mb-1">地址</h4>
                                <p className="text-sm text-stone-600 leading-relaxed">
                                    广东省深圳市宝安区<br />
                                    沙井街道马安山社区<br />
                                    安东尼澳实业有限公司
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 mb-4">
                            <Phone className="text-seal-red mt-1 shrink-0" size={20} />
                            <div>
                                <h4 className="font-serif font-bold text-ink-black mb-1">电话</h4>
                                <p className="text-sm text-stone-600">
                                    138-xxxx-xxxx
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Clock className="text-seal-red mt-1 shrink-0" size={20} />
                            <div>
                                <h4 className="font-serif font-bold text-ink-black mb-1">营业时间</h4>
                                <p className="text-sm text-stone-600">
                                    周二至周日<br />
                                    10:00 - 21:00
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setShowQR(true)}
                        className="w-full py-3 bg-ink-black text-white font-serif tracking-widest hover:bg-stone-800 transition-colors"
                    >
                        预约试听
                    </button>
                </div>

                {/* Map Embed */}
                <div className="w-full md:w-2/3 h-64 md:h-auto min-h-[300px] bg-stone-200 relative overflow-hidden shadow-md">
                    <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                        src="https://maps.google.com/maps?q=22.717801,113.818947&hl=zh-CN&z=17&output=embed"
                        className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                        title="Studio Location"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 pointer-events-none">
                        <span className="bg-white/90 px-3 py-1 text-xs font-bold text-ink-black shadow-md backdrop-blur-sm border border-stone-200">
                            墨颜书画院
                        </span>
                    </div>
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