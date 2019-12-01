<template>
  <v-card>
    <v-card-title>
      <template v-if="this.$store.state.user.mode == 'add'">
        <span class="headline">유저 등록</span>
      </template>
      <template v-else-if="this.$store.state.user.mode == 'edit'">
        <span class="headline">유저 수정</span>
      </template>
    </v-card-title>
    <!-- {{user.content}} -->
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              ref="name"
              v-model="user.content.Name"
              :rules="[rules.required]"
              label="Full Name*"
              placeholder
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              ref="email"
              v-model="user.content.Email"
              label="Email*"
              :rules="[rules.required, rules.email]"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              ref="password"
              v-model="user.content.Password"
              :append-icon="show ? 'visibility' : 'visibility_off'"
              :rules="[rules.required, rules.min]"
              :type="show ? 'text' : 'password'"
              name="input-10-1"
              label="Normal with hint text"
              hint="At least 8 characters"
              counter
              @click:append="show = !show"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <small>*indicates required field</small>
    </v-card-text>
    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn color="blue darken-1" text @click="close()">Close</v-btn>
      <v-btn color="blue darken-1" text @click="validationCheck()">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Constant from "../../../constant.js";
import { mapState } from "vuex";
import _ from "lodash";

export default {
  data() {
    return {
      formHasErrors: false,
      name: "",
      email: "",
      password: "",
      show: false,
      rules: {
        required: value => !!value || "This field is required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      }
    };
  },
  // computed: {
  //   form() {
  //     return {
  //       name: this.name,
  //       email: this.email,
  //       password: this.password
  //     };
  //   },
  // },
  computed: _.extend(
    {
      form() {
        return {
          name: this.user.content.Name,
          email: this.user.content.Email,
          password: this.user.content.Password
        };
      }
    },
    mapState(["user"])
  ),
  methods: {
    close() {
      this.$store.commit(Constant.MODAL_CLOSE, { target: "user" });
    },
    validationCheck() {
      this.formHasErrors = false;
      Object.keys(this.form).forEach(f => {
        if (this.form[f] == "") {
          this.formHasErrors = true;
          this.$refs[f].validate(true);
        }
      });
      //이메일 중복여부를 채크해주는 벨리데이션 추가해야됨
      if (!this.formHasErrors) {
        this.save();
      }
    },
    save() {
      this.$store.dispatch(Constant.USER_SAVE, {
        name: this.user.content.Name,
        email: this.user.content.Email,
        password: this.user.content.Password
      });
    }
  }
};
</script>
