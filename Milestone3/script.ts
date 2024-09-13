

// get refreances t the form and display area.

const form= document.getElementById("resume form")as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display")as HTMLElement;

// handle form submission

form.addEventListener("submit", (event:Event)=>{
    event.preventDefault();

    // collect input values.

    const name = (document.getElementById("name")as HTMLInputElement).value
    const email = (document.getElementById("email")as HTMLInputElement).value
    const phone= (document.getElementById("phone")as HTMLInputElement).value
    const education = (document.getElementById("education")as HTMLInputElement).value
    const experience = (document.getElementById("experience")as HTMLInputElement).value
    const skills = (document.getElementById("skills")as HTMLInputElement).value


    // generate the resume content dynamically.

    const resumeHTML = `<h2><b>resume</b></h2>
    <h3>personal information</h3>
    <P><b>Name:</b>${name}</p>
    <P><b>Email:</b>${email}</p>
    <P><b>Phone:</b>${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>experience<h3>
    <p>${experience}</p>

    <h3>Skills<h3>
    <p>${skills}</p>`;
    

    //display  generated resume dynamically

    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;

    }else{console.error(`the resume display element is dismissing.`)
        
    }

});