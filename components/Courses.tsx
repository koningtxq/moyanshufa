import React from 'react';
import SectionTitle from './SectionTitle';
import { Course } from '../types';

const courses: Course[] = [
  {
    id: '1',
    title: '少儿书法启蒙',
    description: '从执笔姿势到基本笔画，培养孩子专注力与审美，打好童子功。',
    image: '/images/courses/course-1.jpg',
    tags: ['硬笔', '软笔', '6-12岁']
  },
  {
    id: '2',
    title: '成人修身班',
    description: '以欧颜柳赵为基，行草隶篆进阶。在快节奏生活中寻一处静谧，修身养性。',
    image: '/images/courses/course-2.jpg',
    tags: ['零基础', '进阶', '解压']
  },
  {
    id: '3',
    title: '国画山水花鸟',
    description: '学习水墨晕染技巧，体验“墨分五色”的奇妙，挥洒自如，写意人生。',
    image: '/images/courses/course-3.jpg',
    tags: ['写意', '工笔', '全龄段']
  }
];

const Courses: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white" id="courses">
      <SectionTitle title="课程设置" subtitle="CURRICULUM" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course) => (
          <div key={course.id} className="group cursor-pointer">
            <div className="relative overflow-hidden mb-4 rounded-sm">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {course.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-1 bg-stone-100 text-ink-grey rounded-sm border border-stone-200">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-serif font-bold text-ink-black mb-2 group-hover:text-seal-red transition-colors">
              {course.title}
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              {course.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;