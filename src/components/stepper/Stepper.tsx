import { useState } from "react";
import { Stepper, StepperProps, rem } from "@mantine/core";
import PersonalInfo from "../personal-info/PersonalInfo";

function StyledStepper(props: StepperProps) {
	return (
		<Stepper
			styles={{
				step: {
					padding: 0,
				},
				separator: {
					height: rem(2), // Separator chizig'ining balandligi
					backgroundColor: "#000", // Chizig'ining rangi
					marginLeft: rem(-2),
					marginRight: rem(-2),
				},
			}}
			{...props}
		/>
	);
}

function Demo() {
	const [active, setActive] = useState(0); // 0 - birinchi bosqichni belgilash

	return (
		<StyledStepper active={active} onStepClick={setActive}>
			<Stepper.Step label="Personal Information">
				<PersonalInfo nextStep={() => setActive(1)} />
			</Stepper.Step>

			<Stepper.Step label="Contact Details">
				<div>Contact details content goes here.</div>
			</Stepper.Step>

			<Stepper.Step label="Verify Identity">
				<div>Verification content goes here.</div>
			</Stepper.Step>

			<Stepper.Step label="Review & Submit">
				<div>Review and submit content goes here.</div>
			</Stepper.Step>
		</StyledStepper>
	);
}

export default Demo;
