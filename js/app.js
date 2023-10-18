console.log('Our Team');

const gridElement = document.querySelector('.grid');
console.log(gridElement);

const members = [
    {
        fullname: 'Wayne Barnett',
        profession: 'Founder & CEO',
        memberImg: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        fullname: 'Angela Caroll',
        profession: 'Chief Editor',
        memberImg: 'angela-caroll-chief-editor.jpg',
    },
    {
        fullname: 'Walter Gordon',
        profession: 'Office Manager',
        memberImg: 'walter-gordon-office-manager.jpg',
    },
    {
        fullname: 'Angela Lopez',
        profession: 'Social Media Manager',
        memberImg: 'angela-lopez-social-media-manager.jpg',
    },
    {
        fullname: 'Scott Estrada',
        profession: 'Developer',
        memberImg: 'scott-estrada-developer.jpg',
    },
    {
        fullname: 'Barbara Ramos',
        profession: 'Graphic Designer',
        memberImg: 'barbara-ramos-graphic-designer.jpg',
    }
];

console.log(members);

for (let i = 0; i < members.length; i++) {

     const currentMember = members[i];
     console.log(currentMember, i);

     for (let i = 0; i < 1; i++) {
        n = i + 1;
        console.log(n);
    
        const htmlBox = 
        ` <div class="member-box">
            <span id="fullname">${currentMember.fullname}</span>
            <span id="profession">${currentMember.profession}</span>
            <img class="member-img" src"${currentMember.memberImg}" alt"">
         </div>`;

        
    
        gridElement.innerHTML = gridElement.innerHTML + htmlBox;
    }
//  console.log(imgElement);
}




