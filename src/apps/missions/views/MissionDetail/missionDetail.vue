<template>
    <div class="container">
        <div class="mission-detail" v-if="!!mission && !sending">
            <p class="mission-name">{{ mission.name }}</p>
            <NameForm @submit="submit" label-text="New Name" />
            <span v-if="error">There was an error</span>
        </div>
        <div class="spinner" v-if="!mission || sending"><Spinner /></div>
    </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { namespace } from 'vuex-class';
  import { Mission } from '@/@types/mission';
  import CniButton from '@/components/Button/cniButton.vue';
  import NameForm from '@/components/Form/cniForm.vue';
  import Spinner from '@/components/Spinner/spinner.vue'
  import { Route } from 'vue-router';

  const mission = namespace('mission');

  @Component({
    components: {
      CniButton, NameForm, Spinner
    }
  })
  export default class DetailView extends Vue {
    @mission.Getter
    missionById!: (id: number) => Mission | undefined;

    @mission.Action
    updateMission!: (mission: Mission) => Promise<void>;

    id = 0;
    error = false;
    sending = false;

    get mission(): Mission | undefined {
      return this.missionById(this.id);
    }

    mounted(): void {
      this.id = parseInt(this.$route.params.id, 10);
    }

    async submit(form: { name: { value: string, valid: boolean } }): Promise<void> {
      const name = form.name.value;
      this.sending = true;
      await this.updateMission({
        ...this.mission!,
        name
      });
      if (this.mission!.name !== name) {
        this.error = true;
      } else {
        await this.$router.push({name: 'main'})
      }
      this.sending = false;
    }

    beforeRouteEnter(to: Route, from: Route, next: any): void {
      next((vm: DetailView) => {
        if (!vm.mission || !vm.mission.editable) {
          vm.$router.push({ name: 'main' })
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
    .container {
        padding: 2rem;
    }
    .mission-detail {
        border-radius: 0.25rem;
        -webkit-box-shadow: 6px 4px 20px -5px rgba(0,0,0,0.25);
        -moz-box-shadow: 6px 4px 20px -5px rgba(0,0,0,0.25);
        box-shadow: 6px 4px 20px -5px rgba(0,0,0,0.25);
        display: flex;
        flex-direction: column;
        padding: 2rem;
    }
    .mission-name {
        border-bottom: 1px solid grey;
        padding-bottom: 0.5rem;
    }
    .spinner {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
