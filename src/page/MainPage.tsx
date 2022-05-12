import React from 'react';
import styled from 'styled-components';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import RealTimeEnergy from "../components/RealTimeEnergy";
import Footer from "../components/Footer";
import MainTitle from "../components/MainTitle";


const MainPage = () => {

    return (

        <BaseComponent>
            <div style={{width:'250px'}}>
                <Sidebar/>
            </div>
            <div>
                 <Header/>
                 <div>
                     <div style={{display:'flex', width:'1350px',margin:'47px 0 41px 45px'}}>
                        <MainTitle title={'Overview'} color={'black'} caseType={'bigTitle'}/>
                     </div>
                     <div><RealTimeEnergy></RealTimeEnergy></div>
                 </div>
            </div>
            <div>
            <Footer/>
            </div>
        </BaseComponent>
    );
};

export default MainPage;


const BaseComponent = styled.div`
   width: 1600px;
   height: 900px;
   display: flex;
   background-color: #F4F7FC;
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   
`
// const PageTitle = styled.div`
//     position: absolute;
//     top: 115px;
//     left: 295px;
//     font-family: 'Nanum Gothic', sans-serif;
//     font-size: 24px;
//     font-weight: 800;
//     color: #171725;
// `;
