const MyKad_1 = {
    vehicleregistrationnumber: 'JSM3975',
    idnumber: '890916136192',
    postcode: '57000'
}

const MyKad_2 = {
    vehicleregistrationnumber: 'IBK7333',
    idnumber: '570709105533',
    postcode: '55000',
    chassisnumber:'123',
    enginenumber:'321'
}

const MyKad_3 = {
    vehicleregistrationnumber: 'TBR5421',
    idnumber: '880720115030',
    postcode: '47100',
    chassisnumber:'123',
    enginenumber:'321'
}

const Invalid_MyKad_1 = {
    vehicleregistrationnumber: 'JSM3975',
    idnumber: 'abc1123123123123',
    postcode: '123456789012'
}

const Missing_Info_MyKad_1 = {
    vehicleregistrationnumber: 'BY5754',
    idnumber: '610312035439',
    postcode: '47100',
    chassisnumber:'12345678901234567890123456789012345678901234567890',
    enginenumber:'12345678901234567890123456789012345678901234567890'
}

const Invalid_More_details_required_MyKad_1 = {
    vehicleregistrationnumber: 'BY5754',
    idnumber: '610312035439',
    postcode: '47100',
    yourname:'testin1234',
    contactnumber:'asd123',
    email:'asd123!@#'
}

const More_details_required_MyKad_1 = {
    vehicleregistrationnumber: 'BY5754',
    idnumber: '610312035439',
    postcode: '47100',
    yourname:'testin1234',
    contactnumber:'+60107778888',
    email:'testing@gmail.com'
}

const Invalid_Others_1 = {
    vehicleregistrationnumber: '1234567890123456789012',
    idnumber: '1234567890123456789012345678901234567890123456789012',
    postcode: '123456789012'
}

const Others_1 = {
    vehicleregistrationnumber: 'JSM3975',
    idnumber: '890916136192',
    postcode: '57000'
}

const Business_1 = {
    vehicleregistrationnumber: '12345678901234567890',
    businessregistrationnumber: '1234567890abcdefghij1234567890abcdefghij1234567890',
    postcode: '1234567890'
}

const Policy_Holder_Details_1 = {
    policyholdername: 'Testing7642',
    policycontactnumber: '+60123565632',
    policyemail: 'testing267@gmail.com',
    mailingaddressline1: 'Lot232',
    mailingaddressline2: 'Jalan Seroja',
    state: 'Selangor'
}

export {
    MyKad_1,
    MyKad_2,
    MyKad_3,
    Invalid_MyKad_1,
    Missing_Info_MyKad_1,
    Invalid_More_details_required_MyKad_1,
    More_details_required_MyKad_1,
    Invalid_Others_1,
    Others_1,
    Business_1,
    Policy_Holder_Details_1
}