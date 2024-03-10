
import Card from 'react-bootstrap/Card';

export default function MyCard(props){
    return <div className={props.className || ''}>
            {props.title && (
                <Card.Header>
                    <h4>{props.title}</h4>
                </Card.Header>
            )}
        <Card.Body>
            {props.children}
        </Card.Body>
    </div>
}