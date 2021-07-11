<template>
    <section class="center">
        <form @submit.prevent="checkForm" class="center__form">
            <section class="wraper placeholder-form">
                <h2 class="center__text">Основные данные</h2>
                <div class="m20 placeholder-container">

                    <input autofocus v-model.trim="$v.forms.fname.$model" type="text" id="fname" name="firstname"
                        placeholder=" " :class="{'invalid-input': validationStatus($v.forms.fname)}">
                    <label for="fname" class="required">Имя пациента</label>
                    <p v-if="$v.forms.fname.$dirty && !$v.forms.fname.required" class="invalid-value">Введите имя
                    </p>
                </div>
                <div class="m20 placeholder-container">

                    <input v-model.trim="$v.forms.lname.$model" type="text" id="lname" name="lastname" placeholder=" "
                        :class="{'invalid-input': validationStatus($v.forms.lname)}">
                    <label for="lname" class="required">Фамилия пациента</label>
                    <p v-if="$v.forms.lname.$dirty && !$v.forms.lname.required" class="invalid-value">Введите
                        фамилию</p>
                </div>
                <div class="m20 placeholder-container">
                    <input v-model.trim="forms.pname" type="text" id="pname" name="patrname" placeholder=" "
                        :class="{'invalid-input': validationStatus($v.forms.pname)}">
                    <label for="lname">Отчество пациента</label>
                </div>
                <div class="m20">
                    <p>Пол:</p>
                    <input v-model="forms.gender" type="radio" id="female" name="contact" value="female">
                    <label for="female">Жен</label>

                    <input v-model="forms.gender" type="radio" id="male" name="contact" value="male">
                    <label for="male">Муж</label>
                </div>

                <label for="phone">Телефон</label>
                <input v-model.trim="$v.forms.phone.$model" type="text" placeholder="7(ХХХ)ХХХ ХХХХХ " name="phone"
                    v-phone :class="{'invalid-input': validationStatus($v.forms.phone)}">
                <p v-if="$v.forms.phone.$dirty && !$v.forms.phone.required" class="invalid-value">Введите номер
                    телефона</p>
                <div class="m20 input-date">
                    <label for="lname" class="required">Дата рождения</label>
                    <input v-model="$v.forms.date.$model" type="date" id="date" class="data-input"
                        :class="{'invalid-input': validationStatus($v.forms.date)}">
                    <p v-if="$v.forms.date.$dirty && !$v.forms.date.required" class="invalid-value">Выберите дату
                    </p>
                </div>

                <div class="m20">
                    <label for="country" class="required">Группа клиентов</label>
                    <select v-model="$v.forms.clientGroup.$model" name="select" size="3" multiple
                        :class="{'invalid-input': validationStatus($v.forms.clientGroup)}">
                        <option value="VIP__PACIENT">VIP</option>
                        <option value="PROBLEM__PACIENT">Проблемный</option>
                        <option value="OMC__PATIENT">ОМС</option>
                    </select>
                    <p v-if="$v.forms.clientGroup.$dirty && !$v.forms.clientGroup.required" class="invalid-value">
                        Выберите группу</p>
                </div>


                <label for="country">Лечащий врач</label>
                <select id="country" name="clientsGroup">
                    <option value="australia">Иванов</option>
                    <option value="canada">Захаров</option>
                    <option value="usa">Чернышева</option>
                </select>
                <div class="m20">
                    <input type="checkbox" name="dontsendMessage" id="dontsendMessage">
                    <label for="dontsendMessage">Не отправлять смс</label>
                </div>
            </section>
            <section class="wraper placeholder-form">
                <h2 class="center__text">Адресс</h2>
                <div class="m20 placeholder-container">
                    <input type="text" name="" id="twnindex" placeholder=" ">
                    <label for="twnindex">Индекс</label>
                </div>
                <div class="m20 placeholder-container">
                    <input type="text" name="" id="country" placeholder=" ">
                    <label for="country">Страна</label>
                </div>
                <div class="m20 placeholder-container">
                    <input type="text" name="" id="obl" placeholder=" ">
                    <label for="obl">Область</label>
                </div>
                <div class="m20 placeholder-container">
                    <input type="text" name="" id="town" placeholder=" " v-model.trim="$v.forms.pacientTown.$model"
                        :class="{'invalid-input': validationStatus($v.forms.pacientTown)}">
                    <label for="town" class="required">Город</label>
                    <p v-if="$v.forms.pacientTown.$dirty && !$v.forms.pacientTown.required" class="invalid-value">
                        Введите город</p>
                </div>
                <div class="m20 placeholder-container">
                    <input type="text" name="" id="street__input" placeholder=" ">
                    <label for="street__input">Улица</label>
                </div>
                <div class="m20 placeholder-container">
                    <input type="text" name="" id="house__input" placeholder=" ">
                    <label for="house__input">Дом</label>
                </div>
            </section>
            <section class="wraper placeholder-form">
                <h2 class="center__text">Документы</h2>
                <div class="m20">
                    <label for="documentType" class="required">Тип документа</label>
                    <select id="documentGroup" name="documentType" v-model="$v.forms.documentType.$model"
                        :class="{'invalid-input': validationStatus($v.forms.documentType)}">
                        <option value="passport">Паспорт</option>
                        <option value="sertificate">Свидетельство о рождении</option>
                        <option value="license">Вод. удостоверение</option>
                    </select>
                    <p v-if="$v.forms.documentType.$dirty && !$v.forms.documentType.required" class="invalid-value">
                        Введите тип документа</p>
                </div>

                <div class="m20">
                <label for="document__series">Серия и номер</label>
                <input type="text" name="" id="document__series" placeholder="1234 567890">
                </div>
                <div class="m20">
                <label for="document__issued">Кем выдан</label>
                <input type="text" name="" id="document__issued" placeholder="УФМС РОССИИ ПО ЧЕЛЯБ. ОБЛ.">
                </div>
                <div class="input-date">
                    <label for="documentDate" class="required">Дата выдачи</label>
                    <input class="data-input" type="date" id="documentDate" name="date" placeholder=""
                        v-model="forms.documentDate"
                        :class="{'invalid-input': validationStatus($v.forms.documentDate)}">
                    <p v-if="$v.forms.documentDate.$dirty && !$v.forms.documentDate.required" class="invalid-value">
                        Выберите дату
                    </p>
                </div>
                <button class="submit-btn">Создать</button>
            </section>
        </form>
    </section>
</template>

<script>
    import {
        validationMixin
    } from 'vuelidate';
    import {
        required
    } from 'vuelidate/lib/validators'

    export default {

        data() {
            return {
                forms: {
                    gender: null,
                    lname: null,
                    fname: null,
                    pname: null,
                    date: null,
                    phone: '',
                    clientGroup: [],
                    pacientTown: null,
                    documentDate: null,
                    documentType: [],
                },

            }
        },
        methods: {
            validationStatus(value) {
                return typeof value != 'undefined' ? value.$error : false;
            },
            checkForm() {
                this.$v.forms.$touch()
                if (this.$v.forms.$error) {
                    return
                } else {
                    alert('Клиент успешно создан')
                }
            },

        },
        mixins: [validationMixin],
        validations: {
            forms: {
                lname: {
                    required
                },
                fname: {
                    required
                },
                phone: {
                    required
                },
                pacientTown: {
                    required
                },
                date: {
                    required
                },
                clientGroup: {
                    required
                },
                documentType: {
                    required
                },
                documentDate: {
                    required
                }


            }
        },
        directives: {
            phone: {
                bind(el) {
                    el.oninput = function (e) {
                        if (!e.isTrusted) {
                            return
                        }

                        const x = this.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/)

                        if (!x[2] && x[1] !== '') {
                            this.value = x[1] === '7' ? x[1] : '7' + x[1]
                        } else {
                            this.value = !x[3] ? x[1] + x[2] : x[1] + '(' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[
                                4] : '')
                        }
                    }
                }
            }
        }
    }
</script>

<style lang='sass'>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
</style>