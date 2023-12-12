import {ButtonGroup, Button} from 'react-bootstrap'

export default function(){
    return (<ButtonGroup aria-label='Channels' className='d-flex flex-column'>
        <Button variant='secondary' className='rounded-0'>
            <span className='my-1'>#</span>
            general</Button>
            <Button variant='light' className='rounded-0'>
                <span className='my-1'>#</span>
                random
            </Button>
    </ButtonGroup>)    
}