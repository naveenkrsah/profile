import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Project</Title>
        <Desc>
          {/* I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects. */}
          Mern Stack Ecommerce App with Redux
        </Desc>
        {/* <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'android app' ?
            <ToggleButton active value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
          }
        </ToggleButtonGroup> */}
        <CardContainer>
          {/* {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))} */}
            {/* <h1>Hello I am naveen</h1> */}
            
          {projects
            // .filter((item) => item.category == toggle)
            .filter((item) => item.category == "project")
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
        <Divider />
        <Title>Features</Title>
        <Desc>
          Here are the features of MERN ECOMMERCE APP.
        </Desc>
        <CardContainer>
          {/* {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))} */}
            {/* <h1>Hello I am naveen</h1> */}
          {projects
            // .filter((item) => item.category == toggle)
            .filter((item) => item.category == "features")
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects