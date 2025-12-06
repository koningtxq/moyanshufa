import React from 'react';
import './h5-components.css';

const MasterProfileH5: React.FC = () => {
  return (
    <div className="h5-master">
      <h2 className="page-title">主理人</h2>
      <p className="page-subtitle">THE MASTER</p>

      <div className="photo-container">
        <div className="photo-frame">
          <img
            src="/images/master.jpg"
            alt="袁凯老师"
            className="photo"
          />
        </div>
        <div className="name-tag">
          <h3 className="name">袁凯</h3>
        </div>
      </div>

      <div className="intro">
        <h3 className="intro-title">墨韵匠心，笔耕不辍</h3>
        <div className="divider"></div>
        <p className="intro-text">
          袁凯老师，深耕书画艺术二十余载。其书法上追秦汉，下探宋元，笔力遒劲而不失温润。
          致力于将传统书画艺术融入现代生活。
        </p>
      </div>

      <div className="credentials">
        <div className="credential-item">
          <span className="dot"></span>
          <span className="text">中国书法家协会 会员</span>
        </div>
        <div className="credential-item">
          <span className="dot"></span>
          <span className="text">中国硬笔书法协会会员</span>
        </div>
        <div className="credential-item">
          <span className="dot"></span>
          <span className="text">中国国画协会会员</span>
        </div>
      </div>
    </div>
  );
};

export default MasterProfileH5;
