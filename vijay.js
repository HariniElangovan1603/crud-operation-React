    import './vijay.css'
    export default function vijay({ items=[] }) {
        return (
            <div>
                <p>ACTOR VIJAY MOVIES</p>
                <table className="table table-striped table-hover table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>YEAR </th>
                            <th>TITLE</th>
                            <th>ROLES</th>
                        </tr>
                    </thead>
                    <tbody>
                      {items.map((item, id) =>(
                            <tr key={id}>
                                <td>{item.year}</td>
                                <td>{item.title}</td>
                                <td>{item.roles}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>




        )
    }