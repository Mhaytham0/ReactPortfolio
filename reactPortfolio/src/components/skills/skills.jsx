import React from 'react';
import { ProgressBar, Badge, Card } from 'react-bootstrap';
import { FaJsSquare, FaReact, FaNodeJs, FaCss3Alt, FaJava, FaHtml5 } from 'react-icons/fa'; // Import icons

const Skill = ({ skillName, proficiency, icon, color }) => {
  return (
    <Card className="mb-3 shadow-sm border-0" style={{background : '#0E3386',width : '70%', margin : '0px 200px'}}>
      <Card.Body className="d-flex align-items-center">
        {/* Icon with custom color and styling */}
        <div className="me-3" style={{ fontSize: '2.5rem', color: color }}>
          {icon}
        </div>
        <div style={{ width: '100%'}} >
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="mb-0" style={{color :'white'}}>{skillName}</h6>
            <Badge pill bg="primary">
              {proficiency}%
            </Badge>
          </div>
          <ProgressBar 
            now={proficiency} 
            variant="info" 
            style={{ height: '8px', borderRadius: '5px' }} 
          />
        </div>
      </Card.Body>
    </Card>
  );
};

const SkillsList = () => {
  const skills = [
    { name: 'HTML', proficiency: 100, icon: <FaHtml5 />, color: '#e34c26' },
    { name: 'CSS', proficiency: 95, icon: <FaCss3Alt />, color: '#2965f1' },
    { name: 'JavaScript', proficiency: 90, icon: <FaJsSquare />, color: '#f0db4f' },
    { name: 'Node.js', proficiency: 80, icon: <FaNodeJs />, color: '#68a063' },
    { name: 'React', proficiency: 70, icon: <FaReact />, color: '#61dafb' },
    { name: 'Java', proficiency: 90, icon: <FaJava />, color: '#007396' }
  ];

  return (
    <div style={{background : '#1F305E', height :'110vh'}} id='skills'>
      <h3 className="mb-6 text-center" style={{fontSize :'4rem', color : '#f8f9fa', fontWeight : 'bold',padding:'25px'}}>My Skills</h3>
      {skills.map((skill, index) => (
        <Skill key={index} skillName={skill.name} proficiency={skill.proficiency} icon={skill.icon} color={skill.color} />
      ))}
    </div>
  );
};

export default SkillsList;