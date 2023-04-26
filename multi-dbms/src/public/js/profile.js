function editField(fieldname) {

    switch(fieldname) {
        case 'name':
            {
                if(document.getElementById('name-edit').getAttribute('class') === 'setting-row-field-edit')
                {
                    document.getElementById('name-edit').setAttribute('class', 'setting-row-field-edit-hide');
                    document.getElementById('name-value').setAttribute('class', 'setting-row-field-value');
                    document.getElementById('btn-name-save').setAttribute('class', 'button-save-hide');
                    document.getElementById('btn-name-edit').innerText = "Edit";

                }

            //edit
                else
                {
                    document.getElementById('name-edit').setAttribute('class', 'setting-row-field-edit');
                    document.getElementById('name-value').setAttribute('class', 'setting-row-field-value-hide');
                    document.getElementById('btn-name-save').setAttribute('class', 'button-save');
                    document.getElementById('btn-name-edit').innerText = "Cancel";
                }
            }
        break;

        case 'display_name':
            {
                if(document.getElementById('dname-edit').getAttribute('class') === 'setting-row-field-edit')
                {
                    document.getElementById('dname-edit').setAttribute('class', 'setting-row-field-edit-hide');
                    document.getElementById('dname-value').setAttribute('class', 'setting-row-field-value');
                    document.getElementById('btn-dname-save').setAttribute('class', 'button-save-hide');
                    document.getElementById('btn-dname-edit').innerText = "Edit";

                }

            //edit
                else
                {
                    document.getElementById('dname-edit').setAttribute('class', 'setting-row-field-edit');
                    document.getElementById('dname-value').setAttribute('class', 'setting-row-field-value-hide');
                    document.getElementById('btn-dname-save').setAttribute('class', 'button-save');
                    document.getElementById('btn-dname-edit').innerText = "Cancel";
                }
            }
        break;

        case 'email_address':
            {
                if(document.getElementById('email-edit').getAttribute('class') === 'setting-row-field-edit')
                {
                    document.getElementById('email-edit').setAttribute('class', 'setting-row-field-edit-hide');
                    document.getElementById('email-value').setAttribute('class', 'setting-row-field-value');
                    document.getElementById('btn-email-save').setAttribute('class', 'button-save-hide');
                    document.getElementById('btn-email-edit').innerText = "Edit";

                }

            //edit
                else
                {
                    document.getElementById('email-edit').setAttribute('class', 'setting-row-field-edit');
                    document.getElementById('email-value').setAttribute('class', 'setting-row-field-value-hide');
                    document.getElementById('btn-email-save').setAttribute('class', 'button-save');
                    document.getElementById('btn-email-edit').innerText = "Cancel";
                }
            }
        break;

        case 'phone':
            {
                if(document.getElementById('phone-edit').getAttribute('class') === 'setting-row-field-edit')
                {
                    document.getElementById('phone-edit').setAttribute('class', 'setting-row-field-edit-hide');
                    document.getElementById('phone-value').setAttribute('class', 'setting-row-field-value');
                    document.getElementById('btn-phone-save').setAttribute('class', 'button-save-hide');
                    document.getElementById('btn-phone-edit').innerText = "Edit";

                }

            //edit
                else    
                {
                    document.getElementById('phone-edit').setAttribute('class', 'setting-row-field-edit');
                    document.getElementById('phone-value').setAttribute('class', 'setting-row-field-value-hide');
                    document.getElementById('btn-phone-save').setAttribute('class', 'button-save');
                    document.getElementById('btn-phone-edit').innerText = "Cancel";
                }
            }
        break;

        case 'dob':
            {
                if(document.getElementById('dob-edit').getAttribute('class') === 'setting-row-field-edit')
                {
                    document.getElementById('dob-edit').setAttribute('class', 'setting-row-field-edit-hide');
                    document.getElementById('dob-value').setAttribute('class', 'setting-row-field-value');
                    document.getElementById('btn-dob-save').setAttribute('class', 'button-save-hide');
                    document.getElementById('btn-dob-edit').innerText = "Edit";

                }

            //edit
                else    
                {
                    document.getElementById('dob-edit').setAttribute('class', 'setting-row-field-edit');
                    document.getElementById('dob-value').setAttribute('class', 'setting-row-field-value-hide');
                    document.getElementById('btn-dob-save').setAttribute('class', 'button-save');
                    document.getElementById('btn-dob-edit').innerText = "Cancel";
                }
            }
        break;

        case 'nal':
            {
                if(document.getElementById('nal-edit').getAttribute('class') === 'setting-row-field-edit')
                {
                    document.getElementById('nal-edit').setAttribute('class', 'setting-row-field-edit-hide');
                    document.getElementById('nal-value').setAttribute('class', 'setting-row-field-value');
                    document.getElementById('btn-nal-save').setAttribute('class', 'button-save-hide');
                    document.getElementById('btn-nal-edit').innerText = "Edit";

                }

            //edit
                else    
                {
                    document.getElementById('nal-edit').setAttribute('class', 'setting-row-field-edit');
                    document.getElementById('nal-value').setAttribute('class', 'setting-row-field-value-hide');
                    document.getElementById('btn-nal-save').setAttribute('class', 'button-save');
                    document.getElementById('btn-nal-edit').innerText = "Cancel";
                }
            }
        break;

        case 'gender':
            {
                if(document.getElementById('gen-edit').getAttribute('class') === 'setting-row-field-edit')
                {
                    document.getElementById('gen-edit').setAttribute('class', 'setting-row-field-edit-hide');
                    document.getElementById('gen-value').setAttribute('class', 'setting-row-field-value');
                    document.getElementById('btn-gen-save').setAttribute('class', 'button-save-hide');
                    document.getElementById('btn-gen-edit').innerText = "Edit";

                }

            //edit
                else    
                {
                    document.getElementById('gen-edit').setAttribute('class', 'setting-row-field-edit');
                    document.getElementById('gen-value').setAttribute('class', 'setting-row-field-value-hide');
                    document.getElementById('btn-gen-save').setAttribute('class', 'button-save');
                    document.getElementById('btn-gen-edit').innerText = "Cancel";
                }
            }
        break;

        case 'address':
            {
                if(document.getElementById('addr-edit').getAttribute('class') === 'setting-row-field-edit')
                {
                    document.getElementById('addr-edit').setAttribute('class', 'setting-row-field-edit-hide');
                    document.getElementById('addr-value').setAttribute('class', 'setting-row-field-value');
                    document.getElementById('btn-addr-save').setAttribute('class', 'button-save-hide');
                    document.getElementById('btn-addr-edit').innerText = "Edit";

                }

            //edit
                else    
                {
                    document.getElementById('addr-edit').setAttribute('class', 'setting-row-field-edit');
                    document.getElementById('addr-value').setAttribute('class', 'setting-row-field-value-hide');
                    document.getElementById('btn-addr-save').setAttribute('class', 'button-save');
                    document.getElementById('btn-addr-edit').innerText = "Cancel";
                }
            }
        break;

        case 'currency':
            {
                if(document.getElementById('cur-edit').getAttribute('class') === 'setting-row-field-edit')
                {
                    document.getElementById('cur-edit').setAttribute('class', 'setting-row-field-edit-hide');
                    document.getElementById('cur-value').setAttribute('class', 'setting-row-field-value');
                    document.getElementById('btn-cur-save').setAttribute('class', 'button-save-hide');
                    document.getElementById('btn-cur-edit').innerText = "Edit";

                }

            //edit
                else    
                {
                    document.getElementById('cur-edit').setAttribute('class', 'setting-row-field-edit');
                    document.getElementById('cur-value').setAttribute('class', 'setting-row-field-value-hide');
                    document.getElementById('btn-cur-save').setAttribute('class', 'button-save');
                    document.getElementById('btn-cur-edit').innerText = "Cancel";
                }
            }
        break;

        case 'password':
            {
                if(document.getElementById('pass-edit').getAttribute('class') === 'setting-row-field-edit')
                {
                    document.getElementById('pass-edit').setAttribute('class', 'setting-row-field-edit-hide');
                    document.getElementById('pass-value').setAttribute('class', 'setting-row-field-value');
                    document.getElementById('btn-pass-save').setAttribute('class', 'button-save-hide');
                    document.getElementById('btn-pass-edit').innerText = "Edit";

                }

            //edit
                else    
                {
                    document.getElementById('pass-edit').setAttribute('class', 'setting-row-field-edit');
                    document.getElementById('pass-value').setAttribute('class', 'setting-row-field-value-hide');
                    document.getElementById('btn-pass-save').setAttribute('class', 'button-save');
                    document.getElementById('btn-pass-edit').innerText = "Cancel";
                }
            }
        break;

        case 'payment_method':
            {
                if(document.getElementById('paymed-edit').getAttribute('class') === 'setting-row-field-edit')
                {
                    document.getElementById('paymed-edit').setAttribute('class', 'setting-row-field-edit-hide');
                    document.getElementById('paymed-value').setAttribute('class', 'setting-row-field-value');
                    document.getElementById('btn-paymed-save').setAttribute('class', 'button-save-hide');
                    document.getElementById('btn-paymed-edit').innerText = "Edit";

                }

            //edit
                else    
                {
                    document.getElementById('paymed-edit').setAttribute('class', 'setting-row-field-edit');
                    document.getElementById('paymed-value').setAttribute('class', 'setting-row-field-value-hide');
                    document.getElementById('btn-paymed-save').setAttribute('class', 'button-save');
                    document.getElementById('btn-paymed-edit').innerText = "Cancel";
                }
            }
        break;

        case 'card_number':
            {
                if(document.getElementById('cnum-edit').getAttribute('class') === 'setting-row-field-edit')
                {
                    document.getElementById('cnum-edit').setAttribute('class', 'setting-row-field-edit-hide');
                    document.getElementById('cnum-value').setAttribute('class', 'setting-row-field-value');
                    document.getElementById('btn-cnum-save').setAttribute('class', 'button-save-hide');
                    document.getElementById('btn-cnum-edit').innerText = "Edit";

                }

            //edit
                else    
                {
                    document.getElementById('cnum-edit').setAttribute('class', 'setting-row-field-edit');
                    document.getElementById('cnum-value').setAttribute('class', 'setting-row-field-value-hide');
                    document.getElementById('btn-cnum-save').setAttribute('class', 'button-save');
                    document.getElementById('btn-cnum-edit').innerText = "Cancel";
                }
            }
        break;

        case 'exp':
            {
                if(document.getElementById('exp-edit').getAttribute('class') === 'setting-row-field-edit')
                {
                    document.getElementById('exp-edit').setAttribute('class', 'setting-row-field-edit-hide');
                    document.getElementById('exp-value').setAttribute('class', 'setting-row-field-value');
                    document.getElementById('btn-exp-save').setAttribute('class', 'button-save-hide');
                    document.getElementById('btn-exp-edit').innerText = "Edit";

                }

            //edit
                else    
                {
                    document.getElementById('exp-edit').setAttribute('class', 'setting-row-field-edit');
                    document.getElementById('exp-value').setAttribute('class', 'setting-row-field-value-hide');
                    document.getElementById('btn-exp-save').setAttribute('class', 'button-save');
                    document.getElementById('btn-exp-edit').innerText = "Cancel";
                }
            }
        break;

        case 'cardholder_name':
            {
                if(document.getElementById('chdn-edit').getAttribute('class') === 'setting-row-field-edit')
                {
                    document.getElementById('chdn-edit').setAttribute('class', 'setting-row-field-edit-hide');
                    document.getElementById('chdn-value').setAttribute('class', 'setting-row-field-value');
                    document.getElementById('btn-chdn-save').setAttribute('class', 'button-save-hide');
                    document.getElementById('btn-chdn-edit').innerText = "Edit";

                }

            //edit
                else    
                {
                    document.getElementById('chdn-edit').setAttribute('class', 'setting-row-field-edit');
                    document.getElementById('chdn-value').setAttribute('class', 'setting-row-field-value-hide');
                    document.getElementById('btn-chdn-save').setAttribute('class', 'button-save');
                    document.getElementById('btn-chdn-edit').innerText = "Cancel";
                }
            }
        break;

        case 'cvc':
            {
                if(document.getElementById('cvc-edit').getAttribute('class') === 'setting-row-field-edit')
                {
                    document.getElementById('cvc-edit').setAttribute('class', 'setting-row-field-edit-hide');
                    document.getElementById('cvc-value').setAttribute('class', 'setting-row-field-value');
                    document.getElementById('btn-cvc-save').setAttribute('class', 'button-save-hide');
                    document.getElementById('btn-cvc-edit').innerText = "Edit";

                }

            //edit
                else    
                {
                    document.getElementById('cvc-edit').setAttribute('class', 'setting-row-field-edit');
                    document.getElementById('cvc-value').setAttribute('class', 'setting-row-field-value-hide');
                    document.getElementById('btn-cvc-save').setAttribute('class', 'button-save');
                    document.getElementById('btn-cvc-edit').innerText = "Cancel";
                }
            }
        break;
    }
};

function editSection(sectionname) {
    switch(sectionname) {
        case 'personal_detail':
            {
                document.getElementById('reference').setAttribute('class', 'col my-border-right-hide');
                document.getElementById('personal-detail').setAttribute('class', 'col my-border-right');
            }
        break;

        case 'reference':
            {
                document.getElementById('reference').setAttribute('class', 'col my-border-right');
                document.getElementById('personal-detail').setAttribute('class', 'col my-border-right-hide');
            }
        break;
    }
}