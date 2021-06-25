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
    
    table {
        margin-top: 30px;
        width: 100%;
        height: 30px;
        border: 1px solid
    }

    th {
        text-align: center;
        border: 1px solid;
    }

    td {
        text-align: center;
        border: 1px lightgray solid;
    }
`
  

