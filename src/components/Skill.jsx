import { useState } from 'react';
import './Skills.css';

import { 
  FaHtml5, 
  FaCss3Alt, 
  FaPython, 
  // FaCode,
  FaComments,
  FaChartLine,
  FaLightbulb,
  // FaUsers,
  FaJava,
  FaFigma,
  FaPhp,
  FaReact,
  FaGithub
} from 'react-icons/fa';

import {
  IoLogoJavascript
} from "react-icons/io5";

import { SiC } from '@icons-pack/react-simple-icons';
import {
  SiMysql,
  SiPhpmyadmin,
  SiAdobeillustrator,
  SiAdobepremierepro ,
  SiCanva,
  SiNotepadplusplus,
  SiApachenetbeanside
 } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { GrOracle } from "react-icons/gr";
import { DiMsqlServer } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { GiBrain } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { FaBusinessTime } from "react-icons/fa6";
import { TbPrompt } from "react-icons/tb";

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');

  // Technical skills data with different colors
  const technicalSkills = [
    { name: 'HTML', level: 80, icon: <FaHtml5 size={24} />, color: '#E44D26' },
    { name: 'CSS', level: 80, icon: <FaCss3Alt size={24} />, color: '#264DE4' },
    { name: 'Python', level: 80, icon: <FaPython size={24} />, color: '#3776AB' },
    { name: 'Java Script', level: 50, icon: <IoLogoJavascript size={24} />, color: '#ffd60a' },
    { name: 'Java', level: 70, icon: <FaJava size={24} />, color: '#ff0000' },
    { name: 'Figma', level: 90, icon: <FaFigma size={24} />, color: '#000000' },
    { name: 'C Language', level: 85, icon: <SiC size={24} />, color: '#2c10e3' },
    { name: 'mySQL', level: 88, icon: <SiMysql size={27} />, color: '#001b7d' },
    { name: 'MongoDB', level: 88, icon: <DiMongodb size={24} />, color: '#00300a' },
    { name: 'Oracle Database', level: 88, icon: <GrOracle size={24} />, color: '#ed8200' },
    { name: 'PHP', level: 80, icon: <FaPhp size={32} />, color: '#b7a4ff' },
    { name: 'PHP myAdmin', level: 70, icon: <SiPhpmyadmin size={24} />, color: '#b7a4ff' },
    { name: 'Microsoft SQL Server', level: 70, icon: <DiMsqlServer size={30} />, color: '#ffe51c' },
    { name: 'React', level: 80, icon: <FaReact size={24} />, color: '#74daff' },
    { name: 'Adobe Illustrator', level: 90, icon: <SiAdobeillustrator size={24} />, color: '#661f00' },
    { name: 'Adobe Premiere Pro', level: 90, icon: <SiAdobepremierepro size={24} />, color: '#1f00b8' },
    { name: 'Canva', level: 95, icon: <SiCanva size={24} />, color: '#002dd1' },
    { name: 'VS Code', level: 89, icon: <VscVscode size={28} />, color: '#54b2ff' },
    { name: 'Notepad++', level: 89, icon: <SiNotepadplusplus size={24} />, color: '#00a624' },
    { name: 'Apache netbeans', level: 80, icon: <SiApachenetbeanside size={24} />, color: '#85004d' },
    { name: 'GitHub', level: 70, icon: <FaGithub size={24} />, color: '#000000' },
  ];

  // Soft skills data with different colors
  const softSkills = [
    { name: 'Komunikasi', level: 90, icon: <FaComments size={24} />, color: '#9C27B0' },
    { name: 'ProblemSolver', level: 90, icon: <FaChartLine size={24} />, color: '#FF9800' },
    { name: 'Kreatif & Inovatif', level: 90, icon: <FaLightbulb size={24} />, color: '#4CAF50' },
    { name: 'Growth Mindset', level: 90, icon: <GiBrain size={24} />, color: '#2196F3' },
    { name: 'Teamwork', level: 93, icon: <RiTeamFill size={24} />, color: '#c700d1' },
    { name: 'Manajemen Waktu', level: 98, icon: <FaBusinessTime size={24} />, color: '#d10000' },
    { name: 'AI Prompting', level: 100, icon: <TbPrompt size={24} />, color: '#006a6e' },
  ];

  return (
    <div className="skills-section">
      <h1 className="skill-title">Skill Saya</h1>
      
      <div className="skill-tabs">
        <button 
          className={`skill-tab ${activeTab === 'technical' ? 'active' : ''}`}
          onClick={() => setActiveTab('technical')}
        >
          Technical Skill
        </button>
        <button 
          className={`skill-tab ${activeTab === 'soft' ? 'active' : ''}`}
          onClick={() => setActiveTab('soft')}
        >
          Soft Skill
        </button>
      </div>
      
      <div className="skills-grid">
        {activeTab === 'technical' ? (
          technicalSkills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card"
              style={{ '--card-color': skill.color }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-level">
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ 
                    width: `${skill.level}%`,
                    backgroundColor: skill.color
                  }}
                ></div>
              </div>
              <div className="skill-card-footer">
                {index % 2 === 0 ? 'Advanced' : 'Intermediate'}
              </div>
            </div>
          ))
        ) : (
          softSkills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card soft-skill"
              style={{ '--card-color': skill.color }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-level">
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ 
                    width: `${skill.level}%`,
                    backgroundColor: skill.color
                  }}
                ></div>
              </div>
              <div className="skill-card-footer">
                {index % 2 === 0 ? 'Expert' : 'Advanced'}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Skills;