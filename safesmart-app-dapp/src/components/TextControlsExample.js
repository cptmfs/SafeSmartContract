import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormGroup } from 'react-bootstrap';


function TextControlsExample() {
  return (
    <Form>
        <Form.Group className="mb-3">
        <Form.Label>Already Staked Token         <Form.Control placeholder="@staked tokens " disabled />
</Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Tokens To be Locked  <Form.Control type="number" placeholder="123" /></Form.Label>
      </Form.Group>
      <FormGroup>
      <Form.Label>Stake Amount
      <Form.Select aria-label="Default select example">
      <option>Stake Time</option>
      <option value="1">1 Month</option>
      <option value="2">3 Month</option>
      <option value="3">6 Month</option>
    </Form.Select>
    </Form.Label>
    </FormGroup>
    <Button className="mt-3" variant="success">Stake</Button>{' '}

    </Form>
  );
}

export default TextControlsExample;