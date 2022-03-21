import React from 'react'

const header = {
    'first_name': 'name',
    'second_name': 'surname',
    'birth_day': 'birthday'
}

const AuthorItem = ({author}) => {
    return (
        <tr>
            <td>
                {author.first_name}
            </td>
            <td>
                {author.last_name}
            </td>
            <td>
                {author.birthdate_year}
            </td>
        </tr>
    )
}

const AuthorsList = ({authors}) =>{
    return (
        <table>
        <th>
            {header['first_name'].toUpperCase()}
        </th>
        <th>
            {header['second_name'].toUpperCase()}
        </th>
        <th>
            {header.birth_day.toUpperCase()}
        </th>
        {authors.map((author) => <AuthorItem author={author} />)}
        </table>
    )
}

export default AuthorsList