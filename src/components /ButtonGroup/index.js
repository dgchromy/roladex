import React from "react";
import "./styles.css";
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/button"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"

function BtnGroup ({ sortBtn, resetBtn, children, handleSelectDropdown }) {
     return ( 
         <ButtonGroup className="margin full-width">
             <Button onClick={sortBtn}>{children}</Button>

             <DropdownButton as={ButtonGroup} title="Title" id="bg-nested-dropdown" onSelect={handleSelectDropdown}>
                <Dropdown.Item eventKey="Striker">Striker</Dropdown.Item>
                <Dropdown.Item eventKey=" Midfielder">Midfielder</Dropdown.Item>
                <Dropdown.Item eventKey="Defender">Defender</Dropdown.Item>
                <Dropdown.Item eventKey="Goalie">Goalie</Dropdown.Item>
            </DropdownButton>

            <DropdownButton as={ButtonGroup} title="Location" id="bg-nested-dropdown" onSelect={handleSelectDropdown}>
                <Dropdown.Item eventKey="Seattle">Seattle</Dropdown.Item>
                <Dropdown.Item eventKey="Columbus">Columbus</Dropdown.Item>
                <Dropdown.Item eventKey="Portland">Portland</Dropdown.Item>
            </DropdownButton>
            <Button onClick={resetBtn}>Reset</Button>

         </ButtonGroup>
     )
}
export default BtnGroup; 
