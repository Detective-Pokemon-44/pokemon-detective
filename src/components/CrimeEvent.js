import styled from '@emotion/styled';
import crimeObject from '../utils/crimeObject';

export default function CrimeEvent({ individual }) {
    const Folder = styled.div`
        :before {
            content: "${individual.id}";
        }
    `
    
    return (
        <div className='container'>
            <Folder className="folder">
                <div className='folder-inside'></div>
                <span className='folderName'>
                    {crimeObject[individual.category].alternate}
                </span>
            </Folder>
        </div>
    )
}