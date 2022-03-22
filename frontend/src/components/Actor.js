import React from 'react'

const header = {
    'name': 'имя',
    'surname': 'фамилия',
    'birthday': 'год рождения'
}

const ActorItem = ({actor}) => {
    return (
        <tr>
            <td>
                {actor.name}
            </td>
            <td>
                {actor.surname}
            </td>
            <td>
                {actor.birthday}
            </td>
        </tr>
    )
}

const ActorList = ({actors}) =>{
    console.log(actors);
    return (
        <table>
        <th>
            {header['name'].toUpperCase()}
        </th>
        <th>
            {header['surname'].toUpperCase()}
        </th>
        <th>
            {header.birthday.toUpperCase()}
        </th>
        {actors.map((actor) => <ActorItem actor={actor} />)}
        </table>
    )
}

export default ActorList