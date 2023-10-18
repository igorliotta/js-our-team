console.log('Our Team');

const members = [
    {
        fullname: 'Wayne Barnett',
        profession: 'Founder & CEO',
        memberImg: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        fullname: 'Angela Caroll',
        profession: 'Chief Editor',
        memberImgString: 'angela-caroll-chief-editor.jpg',
    },
    {
        fullname: 'Walter Gordon',
        profession: 'Office Manager',
        memberImgString: 'walter-gordon-office-manager.jpg',
    },
    {
        fullname: 'Angela Lopez',
        profession: 'Social Media Manager',
        memberImgString: 'angela-lopez-social-media-manager.jpg',
    },
    {
        fullname: 'Scott Estrada',
        profession: 'Developer',
        memberImgString: 'scott-estrada-developer.jpg',
    },
    {
        fullname: 'Barbara Ramos',
        profession: 'Graphic Designer',
        memberImgString: 'barbara-ramos-graphic-designer.jpg',
    }
];

console.log(members);

for (let i = 0; i < members.length; i++) {

     const currentMember = members[i];
     console.log(currentMember, i);

     const currentMemberFullnameString = JSON.stringify(currentMember.fullname);
     console.log(currentMemberFullnameString);

     const currentMemberProfessionString = JSON.stringify(currentMember.profession);
     console.log(currentMemberProfessionString);

     const currentMemberMemberImgString = JSON.stringify(currentMember.memberImgString);
     console.log(currentMemberMemberImgString);

     const currentMemberFullString = currentMemberFullnameString + " " + currentMemberProfessionString + " " + currentMemberMemberImgString;
     console.log(currentMemberFullString);

    
}

