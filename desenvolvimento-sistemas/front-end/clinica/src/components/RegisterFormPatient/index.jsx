import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { IMaskInput } from 'react-imask'

function RegisterFormPatient() {
    const [formData, setFormData] = useState({
        fullName: "",
        gender: "",
        birthdate: "",
        cpf: "",
        rg: "",
        maritalStatus: "",
        phone: "",
        email: "",
        birthplace: "",
        emergencyContact: "",
        allergies: "",
        specialCare: "",
        healthInsurance: "",
        insuranceNumber: "",
        insuranceValidity: "",
        address: {
            cep: "",
            city: "",
            state: "",
            street: "",
            number: "",
            complement: "",
            neighborhood: "",
            reference: ""
        }
    })

    const [isSaving, setIsSaving] = useState(false)

    // handles

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value })) //operador spread e propriedade computada
    }

    const handleAddressChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            address: { ...prev.address, [name]: value }
        })) //operador spread e propriedade computada
    }

    // requisição para api viacep 

    const fetchAddressData = async (cep) => {
        try {
            const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
            setFormData((prev) => ({
                ...prev,
                address: {
                    ...prev.address,
                    cep: data.cep || "",
                    city: data.localidade || "",
                    state: data.uf || "",
                    street: data.logradouro || "",
                    complement: data.complemento || "",
                    neighborhood: data.bairro || ""
                }
            }))

        } catch (error) {
            console.log("Erro ao buscar endereço", error)
        }
    }

    // tratamento do valor digitado no campo de cep

    const handleCepBlur = (e) => {
        const cep = e.target.value.replace(/\D/g, "")
        if (cep.length === 8) fetchAddressData(cep)

    }

    //submit form

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSaving(true)

        try {
            await axios.post("http://localhost:3000/patients", formData)

            toast.success("Paciente cadastrado com sucesso!", {
                autoClose: 2000,
                hideProgressBar: true
            })

            setFormData({
                fullName: "",
                gender: "",
                birthdate: "",
                cpf: "",
                rg: "",
                maritalStatus: "",
                phone: "",
                email: "",
                birthplace: "",
                emergencyContact: "",
                allergies: "",
                specialCare: "",
                healthInsurance: "",
                insuranceNumber: "",
                insuranceValidity: "",
                address: {
                    cep: "",
                    city: "",
                    state: "",
                    street: "",
                    number: "",
                    complement: "",
                    neighborhood: "",
                    reference: ""
                }
            })

        } catch (error) {
            console.error(error)
            toast.error("Erro ao Salvar os dados!", {
                autoClose: 2000,
                hideProgressBar: true
            })
        }
    }


    return (
        <form
            onSubmit={handleSubmit}
            className='space-y-6 text-gray-800'
            autoComplete='off'
        >

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {/* Nome completo */}
                <fieldset>
                    <label htmlFor='fullName' className='block text-sm font-medium mb-1'>Nome Completo</label>
                    <input
                        type='text'
                        name='fullName'
                        id='fullName'
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                    />
                </fieldset>

                <fieldset>


                    <label htmlFor='gender' className='block text-sm font-medium mb-1'>Gênero</label>

                    <select
                        name='gender'
                        value={formData.gender}
                        onChange={handleInputChange}
                        id='gender'
                        required
                        className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                    >
                        <option value="">Selecione</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="outro">Outro</option>


                    </select>

                </fieldset>


                {/* Data nacimento  */}
                <fieldset>
                    <label htmlFor='birthdate' className='block text-sm font-medium mb-1'>Data de Nacimento</label>
                    <input
                        type='date'
                        name='birthdate'
                        id='birthdate'
                        value={formData.birthdate}
                        onChange={handleInputChange}
                        required
                        className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                    />
                </fieldset>


                {/* CPF  */}
                <fieldset>
                    <label htmlFor='cpf' className='block text-sm font-medium mb-1'>CPF</label>
                    <IMaskInput
                        mask="000.000.000-00"
                        name='cpf'
                        id='cpf'
                        value={formData.cpf}
                        onAccept={(value) => setFormData((prev) => ({ ...prev, cpf: value }))}
                        required
                        className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                    />
                </fieldset>

                {/* RG */}
                <fieldset>
                    <label htmlFor='rg' className='block text-sm font-medium mb-1'>RG</label>
                    <input
                        type='text'
                        name='rg'
                        id='rg'
                        value={formData.rg}
                        onChange={handleInputChange}
                        required
                        className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                    />
                </fieldset>

                {/* Estado Civil */}
                <fieldset>


                    <label htmlFor='maritalStatus' className='block text-sm font-medium mb-1'>Estado Civil</label>

                    <select
                        name='maritalStatus'
                        value={formData.maritalStatus}
                        onChange={handleInputChange}
                        id='maritalStatus'
                        required
                        className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                    >
                        <option value="">Selecione</option>
                        <option value="solteiro(a)">Solteiro(a)</option>
                        <option value="casado(a)">Casado(a)</option>
                        <option value="divorciado(a)">Divorciado(a)</option>
                        <option value="viuvo(a)">Viuvo(a)</option>


                    </select>

                </fieldset>



                {/* Telefone  */}
                <fieldset>
                    <label htmlFor='phone' className='block text-sm font-medium mb-1'>Telefone</label>
                    <IMaskInput
                        mask="(00) 9 0000-0000"
                        name='phone'
                        id='phone'
                        value={formData.phone}
                        onAccept={(value) => setFormData((prev) => ({ ...prev, phone: value }))}
                        required
                        className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                    />
                </fieldset>

                {/* emergencyContact  */}
                <fieldset>
                    <label htmlFor='emergencyContact' className='block text-sm font-medium mb-1'>Telefone de Emergência</label>
                    <IMaskInput
                        mask="(00) 9 0000-0000"
                        name='emergencyContact'
                        id='emergencyContact'
                        value={formData.emergencyContact}
                        onAccept={(value) => setFormData((prev) => ({ ...prev, emergencyContact: value }))}
                        required
                        className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                    />
                </fieldset>

                 {/* Email */}
                <fieldset>
                    <label htmlFor='email' className='block text-sm font-medium mb-1'>E-mail</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                    />
                </fieldset>
                
                 {/* Naturalidade */}
                <fieldset>
                    <label htmlFor='birthplace' className='block text-sm font-medium mb-1'>Naturalidade:</label>
                    <input
                        type='text'
                        name='birthplace'
                        id='birthplace'
                        value={formData.birthplace}
                        onChange={handleInputChange}
                        required
                        className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                    />
                </fieldset>
                 {/* Alergias */}
                <fieldset>
                    <label htmlFor='allergies' className='block text-sm font-medium mb-1'>Alergias:</label>
                    <input
                        type='text'
                        name='allergies'
                        id='allergies'
                        value={formData.allergies}
                        onChange={handleInputChange}
                        className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                    />
                </fieldset>
                 {/* Cuidadedos especiais */}
                <fieldset>
                    <label htmlFor='specialCare' className='block text-sm font-medium mb-1'>Cuidados Especiais?</label>
                    <input
                        type='text'
                        name='specialCare'
                        id='specialCare'
                        value={formData.specialCare}
                        onChange={handleInputChange}
                        className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                    />
                </fieldset>

                 {/* Convenio*/}
                <fieldset>
                    <label htmlFor='healthInsurance' className='block text-sm font-medium mb-1'>Convenio</label>
                    <input
                        type='text'
                        name='healthInsurance'
                        id='healthInsurance'
                        value={formData.healthInsurance}
                        onChange={handleInputChange}
                        className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                    />
                </fieldset>
                 {/* Convenio Numero*/}
                <fieldset>
                    <label htmlFor='insuranceNumber' className='block text-sm font-medium mb-1'>Numero Convenio</label>
                    <input
                        type='text'
                        name='insuranceNumber'
                        id='insuranceNumber'
                        value={formData.insuranceNumber}
                        onChange={handleInputChange}
                        className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                    />
                </fieldset>

                 {/*Validade Convenio*/}
                <fieldset>
                    <label htmlFor='insuranceValidity' className='block text-sm font-medium mb-1'>Validade Convenio</label>
                    <input
                        type='date'
                        name='insuranceValidity'
                        id='insuranceValidity'
                        value={formData.insuranceValidity}
                        onChange={handleInputChange}
                        className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                    />
                </fieldset>

                   {/* CEP  */}
                <fieldset>
                    <label htmlFor='cep' className='block text-sm font-medium mb-1'>CEP</label>
                    <IMaskInput
                        mask="00000-000"
                        name='cep'
                        id='cep'
                        value={formData.address.cep}
                        onBlur={handleCepBlur}
                        onAccept={(value) => handleAddressChange({target:{name:"cep",value}})}
                        required
                        className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                    />
                </fieldset>

                   {/* Rua  */}
                <fieldset>
                    <label htmlFor='street' className='block text-sm font-medium mb-1'>Rua</label>
                    <input
                        type='text'
                        name='street'
                        id='street'
                        value={formData.address.street}
                        onChange={handleAddressChange}
                        required
                        className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                    />
                </fieldset>
                   {/* Numero  */}
                <fieldset>
                    <label htmlFor='number' className='block text-sm font-medium mb-1'>Numero</label>
                    <input
                        type='number'
                        name='number'
                        id='number'
                        value={formData.address.number}
                        onChange={handleAddressChange}
                        required
                        className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                    />
                </fieldset>

                
                   {/* bairro */}
                <fieldset>
                    <label htmlFor='addressNeighborhood' className='block text-sm font-medium mb-1'>Bairro</label>
                    <input
                        type='text'
                        name='neighborhood'
                        id='addressNeighborhood'
                        value={formData.address.neighborhood}
                        onChange={handleAddressChange}
                        required
                        className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                    />
                </fieldset>

                   {/* cidade  */}
                <fieldset>
                    <label htmlFor='addressCity' className='block text-sm font-medium mb-1'>Cidade</label>
                    <input
                        type='text'
                        name='addressCity'
                        id='addressCity'
                        value={formData.address.city}
                        onChange={handleAddressChange}
                        required
                        className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                    />
                </fieldset>
                   {/* estado  */}
                <fieldset>
                    <label htmlFor='addressState' className='block text-sm font-medium mb-1'>Estado</label>
                    <input
                        type='text'
                        name='state'
                        id='addressState'
                        value={formData.address.state}
                        onChange={handleAddressChange}
                        required
                        className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                    />
                </fieldset>

                   {/* complemento  */}
                <fieldset>
                    <label htmlFor='addressComplement' className='block text-sm font-medium mb-1'>Complemento</label>
                    <input
                        type='text'
                        name='complement'
                        id='addressComplement'
                        value={formData.address.complement}
                        onChange={handleAddressChange}
                        required
                        className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                    />
                </fieldset>



                   {/* referencia */}
                <fieldset>
                    <label htmlFor='addressNeighborhood' className='block text-sm font-medium mb-1'>Referencia</label>
                    <input
                        type='text'
                        name='referencia'
                        id='addressNeighborhood'
                        value={formData.address.reference}
                        onChange={handleAddressChange}
                        required
                        className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                    />
                </fieldset>

            </div>


            {/* botao de envio */}

            <div className='flex justify-end gap-3 pt-4' >

                <button
                    type='submit'
                    disabled={isSaving}
                    className='px-4 py-2 bg-cyan-700 text-white rounded-lg hover:bg-cyan-600 disabled:opacity-50'
                >
                    {isSaving? "Salvando...":"Salvar"}

                </button>

            </div>


        </form>
    )
}

export default RegisterFormPatient