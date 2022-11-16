import styled from '@emotion/styled';
import crimeObject from '../utils/crimeObject';

export default function CrimeEvent({ individual, i }) {
  const Folder = styled.div`
      :before {
        content: "${+individual.id.toString().slice(4, 9)}";
      }
    `

  return (
    // <div className='container'>
    <Folder className={i % 2 === 0 ? "CrimeEvent-folder" : "CrimeEvent-belowFolder"}>
      <div className='CrimeEvent-folderInside'></div>
      <span className='CrimeEvent-folderName'>
        {crimeObject[individual.category].alternate}
      </span>
    </Folder>
  )
}