import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import ExpensesList from './expenses-listing.component';
import Swal from 'sweetalert2';

export default class CreateExpense extends Component {
    constructor(props) {
        super(props);
        //setting up functions
        this.onChangeExpenseName = this.onChangeExpenseName.bind(this);
        this.onChangeExpenseAmount = this.onChangeExpenseAmount.bind(this);
        this.onChangeExpenseDescription = this.onChangeExpenseDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //Setting up sate
        this.state = {
            name: '',
            amount: '',
            description: ''
        }
    }
    onChangeExpenseName = (e) => {
        this.setState({name: e.target.value});
    }
    onChangeExpenseAmount = (e) =>{
        this.setState({amount: e.target/value});
    }
    onChangeExpenseDescription = (e) => {
        this.setState({description: e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault()
        const expense = {
            name: this.state.name,
            amount: this.state.amount,
            description: this.state.description
        };
        axios.post('http"//localhost:8000/api/expenses/', expense).then(
            res => console.log(res.data)
        );
        Swal.fire(
            'Good job!',
            'Expense Added Successfully!',
            'Success'
        )
        this.setState({name:'', amount: '', description: ''})
    }
    render() {
        return (<div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                <Row>
                    <Col>
                        <Form.Group controlID="Name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={this.state.name} onChange={this.onChangeExpenseName} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlID="Amount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="number" value={this.state.amount} onChange={this.onChangeExpenseAmount} />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlID="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" type="textarea" value={this.state.description} onChange={this.onChangeExpenseDescription} />
                </Form.Group>
                <Button variant="primary" size="lg" block="block" type="submit">Add Expense</Button>
            </Form>
            <br></br><br></br>
            <ExpensesList></ExpensesList>
        </div>);
    }
}