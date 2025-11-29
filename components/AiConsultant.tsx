import React, { useState } from 'react';
import { generateCalligraphyConsultation } from '../services/geminiService';
import { Sparkles, Loader2, Send, Quote } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { AiConsultationResult } from '../types';

const AiConsultant: React.FC = () => {
  const [name, setName] = useState('');
  const [wish, setWish] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AiConsultationResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const responseStr = await generateCalligraphyConsultation(name, wish || '平安喜乐');
      // Clean up markdown code blocks if present
      const cleanJson = responseStr.replace(/```json/g, '').replace(/```/g, '').trim();
      const data = JSON.parse(cleanJson);
      setResult(data);
    } catch (err) {
      console.error("Failed to parse AI response", err);
      // Fallback display if JSON parse fails but text exists (simplified error handling)
      alert("灵感正在汇聚，请稍后再试。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-stone-900 text-stone-200 relative overflow-hidden" id="ai-feature">
       <div className="absolute inset-0 opacity-10">
          <img src="https://picsum.photos/seed/texture/1000/1000" className="w-full h-full object-cover" alt="bg"/>
       </div>
       
       <div className="relative z-10 max-w-2xl mx-auto">
          <div className="text-center mb-10">
              <span className="inline-block p-2 rounded-full bg-stone-800 text-gold-accent mb-4">
                  <Sparkles size={20} />
              </span>
              <SectionTitle title="墨韵 · 灵感" subtitle="AI INK CONSULTANT" />
              <p className="text-stone-400 text-sm font-serif -mt-8">
                  输入您的名字与心愿，让AI为您定制专属的翰墨题词与风格建议。
              </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-stone-800/50 p-6 rounded-lg backdrop-blur-sm border border-stone-700">
              <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">您的名字</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="例如：张伟"
                    className="w-full bg-stone-900 border-b border-stone-600 focus:border-gold-accent outline-none py-3 px-2 text-stone-100 transition-colors placeholder-stone-600"
                    maxLength={10}
                  />
              </div>
              <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">心中所愿 (选填)</label>
                  <input 
                    type="text" 
                    value={wish}
                    onChange={(e) => setWish(e.target.value)}
                    placeholder="例如：事业有成，静心修身"
                    className="w-full bg-stone-900 border-b border-stone-600 focus:border-gold-accent outline-none py-3 px-2 text-stone-100 transition-colors placeholder-stone-600"
                    maxLength={20}
                  />
              </div>
              
              <button 
                type="submit" 
                disabled={loading || !name}
                className="w-full bg-gradient-to-r from-gold-accent to-amber-700 text-white font-bold py-4 px-6 rounded-sm shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Send size={18} />}
                {loading ? '正在研墨构思...' : '获取专属题词'}
              </button>
          </form>

          {result && (
              <div className="mt-10 animate-fade-in bg-paper-bg text-ink-black p-8 rounded-sm shadow-2xl relative">
                  <div className="absolute top-0 left-0 w-full h-2 bg-seal-red/80"></div>
                  
                  <div className="text-center mb-6">
                    <Quote className="inline-block text-stone-300 mb-4" size={32} />
                    <h4 className="font-calligraphy text-2xl md:text-3xl text-ink-black mb-4 whitespace-pre-line leading-relaxed">
                        {result.poem}
                    </h4>
                    <p className="text-xs text-stone-500 font-serif border-t border-stone-300 pt-4 mx-10">
                        {result.meaning}
                    </p>
                  </div>

                  <div className="bg-stone-100 p-4 rounded text-sm text-stone-700 flex items-start gap-3">
                      <div className="bg-ink-black text-white text-xs px-2 py-1 shrink-0 mt-0.5">建议字体</div>
                      <div className="flex-1">
                          <span className="font-bold block mb-1">{result.styleRecommendation.split('，')[0]}</span>
                          <span className="text-xs opacity-80">{result.styleRecommendation}</span>
                      </div>
                  </div>
              </div>
          )}
       </div>
    </section>
  );
};

export default AiConsultant;