import React from 'react';
import SkillCard from '../features/SkillCard';

const Skills = () => {
  return (
    <div className='flex flex-col min-h-screen container mx-auto p-8 h-content'>
      Skills
      <div className='grid grid-cols-4 gap-2'>
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </div>
  );
};

export default Skills;
