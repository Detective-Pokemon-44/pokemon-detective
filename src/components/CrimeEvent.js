import styled from '@emotion/styled';
import crimeObject from '../utils/crimeObject';

export default function CrimeEvent({ individual, i }) {
    console.log(crimeObject["anti-social-behaviour"])
    const Folder = styled.div`
        :before {
            content: "${individual.id}";
        }
    `
    
    return (
        // <div className='container'>
            <Folder className={i % 2 ===0? "folder": "below-folder"}>
                <div className='folder-inside'></div>
                <span className='folderName'>
                    {crimeObject[individual.category].alternate}
                </span>
            </Folder>
    )
}