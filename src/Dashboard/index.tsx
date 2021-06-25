import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import api from '../services/api'

interface Evento {
    id: string
    nomeevento: string
    local: string
    diasemana: string
    horario: string
}

const Dashboard: React.FC = () => {
    const [festas, setFestas] = useState<Evento[]>([])

    async function handleAddFestas(event: any) {
        event.preventDefault()

        const { target: form } = event

        const novoEvento = {
            nomeevento: form.nomeevento.value,
            local: form.local.value,
            diasemana: form.diasemana.value,
            horario: form.horario.value,
        }

        const { data } = await api.post('/events', novoEvento)

        setFestas([...festas, data])
        form.reset()
    }

    useEffect(() => {
        api.get('/events').then(response => setFestas(response.data))
    }, [])
    console.log(festas)

    async function handleDelete(id: string) {
        await api.delete(`/events/${id}`)
        setFestas(festas.filter(party => party.id !== id))
    }

    useEffect(() => {
        api.get('/events').then(response => setFestas(response.data))
    }, [])

    return (
        <Container>
            <form onSubmit={handleAddFestas}>
                <input type='text' name='nomeevento' placeholder='Nome Do Evento' />
                <input type='text' name='local' placeholder='Local Do Evento' />
                <input type='text' name='diasemana' placeholder='Dia Do Evento' />
                <input type='text' name='horario' placeholder='Horario Do Evento' />
                <button type='submit'>Enviar</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Evento</th>
                        <th>Local</th>
                        <th>Dia Semana</th>
                        <th>Horario</th>
                        <th colSpan={2}>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {festas.map((party, index) =>
                        <tr key={index.toString()}>
                            <td>{party.nomeevento}</td>
                            <td>{party.local}</td>
                            <td>{party.diasemana}</td>
                            <td>{party.horario}</td>
                            <button onClick={() => handleDelete(party.id)}>Remove</button>
                            <button>like</button>
                            <button>deslike</button>
                        </tr>
                    )}
                </tbody>
            </table>
        </Container>
    )
}

export default Dashboard


