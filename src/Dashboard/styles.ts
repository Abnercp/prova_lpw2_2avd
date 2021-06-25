import styled from 'styled-components'
export const Container = styled.div` 
    display: flex;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    flex-direction: column;
    font-size: 16px;

    form{
        display:flex;
        flex-direction: column;
        

        input {
            margin-bottom: 16px;
            padding: 8px;
        }

        button {
            padding: 8px;
        }
    }

  


`