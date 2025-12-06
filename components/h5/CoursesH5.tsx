import React from 'react';
import './h5-components.css';

const courses = [
  {
    id: '1',
    title: '少儿书法启蒙',
    description: '从执笔姿势到基本笔画，培养孩子专注力与审美',
    image: '/images/courses/course-1.jpg',
    tags: ['硬笔', '软笔', '6-12岁']
  },
  {
    id: '2',
    title: '成人修身班',
    description: '以欧颜柳赵为基，行草隶篆进阶',
    image: '/images/courses/course-2.jpg',
    tags: ['零基础', '进阶', '解压']
  },
  {
    id: '3',
    title: '国画山水花鸟',
    description: '学习水墨晕染技巧，体验"墨分五色"',
    image: '/images/courses/course-3.jpg',
    tags: ['写意', '工笔', '全龄段']
  }
];

const CoursesH5: React.FC = () => {
  return (
    <div className="h5-courses">
      <h2 className="page-title">课程设置</h2>
      <p className="page-subtitle">CURRICULUM</p>

      <div className="courses-list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-image">
              <img src={course.image} alt={course.title} />
            </div>
            <div className="course-info">
              <div className="tags">
                {course.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-desc">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesH5;
