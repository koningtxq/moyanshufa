import React from 'react';
import SectionTitle from './SectionTitle';

const MasterProfile: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-stone-100 relative overflow-hidden" id="master">
      <SectionTitle title="主理人" subtitle="THE MASTER" />

      <div className="flex flex-col md:flex-row gap-12 items-center max-w-5xl mx-auto">
        {/* Image Frame - Adjusted size for better portrait display */}
        <div className="relative w-full md:w-[400px] aspect-[3/4] shrink-0">
          <div className="absolute inset-0 border-2 border-ink-black translate-x-3 translate-y-3"></div>
          <div className="absolute inset-0 bg-gray-200 overflow-hidden shadow-xl">
            {/* 
                请将下方的 src 替换为您上传的袁凯老师照片的实际路径或 URL。
                例如: src="/assets/yuankai.jpg" 
             */}
            <img
              src="/images/master.jpg"
              alt="袁凯老师"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Vertical Name Tag */}
          <div className="absolute top-6 right-4 bg-white/95 py-5 px-3 shadow-md border-l-2 border-seal-red">
            <h3 className="vertical-text font-calligraphy text-3xl text-ink-black h-28 tracking-widest">
              袁凯
            </h3>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-8">
          <div>
            <h3 className="text-3xl font-serif text-ink-black font-bold mb-3">
              墨韵匠心，笔耕不辍
            </h3>
            <div className="w-16 h-1 bg-seal-red mb-6"></div>
            <p className="text-ink-grey leading-loose font-light text-justify text-lg">
              袁凯老师，深耕书画艺术二十余载。其书法上追秦汉，下探宋元，笔力遒劲而不失温润。
              致力于将传统书画艺术融入现代生活，主张“技道并进”，不仅传授笔墨技法，更注重引导学生体悟东方美学与哲学。
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-300">
            <div className="flex items-center gap-3 group">
              <span className="w-2 h-2 bg-seal-red rounded-full shrink-0 group-hover:scale-150 transition-transform"></span>
              <span className="text-ink-black font-serif text-lg">中国书法家协会 会员</span>
            </div>
            <div className="flex items-center gap-3 group">
              <span className="w-2 h-2 bg-seal-red rounded-full shrink-0 group-hover:scale-150 transition-transform"></span>
              <span className="text-ink-black font-serif text-lg">中国硬笔书法协会会员</span>
            </div>
            <div className="flex items-center gap-3 group">
              <span className="w-2 h-2 bg-seal-red rounded-full shrink-0 group-hover:scale-150 transition-transform"></span>
              <span className="text-ink-black font-serif text-lg">中国国画协会会员</span>
            </div>
            <div className="flex items-center gap-3 group">
              <span className="w-2 h-2 bg-stone-400 rounded-full shrink-0"></span>
              <span className="text-stone-700 font-serif">广东省青年书画院 特聘讲师</span>
            </div>
            <div className="flex items-center gap-3 group">
              <span className="w-2 h-2 bg-stone-400 rounded-full shrink-0"></span>
              <span className="text-stone-700 font-serif">多幅作品被国内外艺术机构收藏</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterProfile;