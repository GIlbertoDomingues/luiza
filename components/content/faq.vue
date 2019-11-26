<template>
  <div id="faq" class="container">
    <div class="row">
      <h2 class="title-faq col">
        Perguntas frequentes
      </h2>
    </div>
    <div class="row">
      <div class="offset-md-1 col-sm-10" role="tablist">
        <b-card no-body>
          <b-card-header v-b-toggle.accordion-1 header-tag="header" class="p-1" role="tab">
            O que é arbitragem?
            <img :src="require('@/assets/images/icon-plus.svg')" class="icon-plus">
            <img :src="require('@/assets/images/icon-minus.svg')" class="icon-minus">
          </b-card-header>
          <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p>Arbitragem é um método reconhecido mundialmente e por lei brasileira  (lei nº 9.307/96) como uma alternativa de resolução de conflito.</p>
              <p>As partes têm que concordar em utilizar a arbitragem e são elas que escolhem o(s) árbitro(s).</p>
              <p>Sentença arbitral tem o mesmo valor que uma sentença de um juiz (inciso vii, art. 515 do cpc e art. 31 da lei de arbitragem).</p>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body>
          <b-card-header v-b-toggle.accordion-2 header-tag="header" class="p-1" role="tab">
            O que é um método alternativo (ou adequado) de resolução de conflitos?
            <img :src="require('@/assets/images/icon-plus.svg')" class="icon-plus">
            <img :src="require('@/assets/images/icon-minus.svg')" class="icon-minus">
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p>São métodos diferentes do Poder Judiciário para resolver um conflito. São eles os reconhecidos hoje pela lei brasileira: negociação, mediação, conciliação e arbitragem.</p>
              <p>A arbitragem é o único método heterocompositivo de resolução de conflito. Em outras palavras, as partes não têm que concordar com a solução, cada um defende seu lado e o árbitro é quem impõe a decisão que deve obrigatoriamente ser respeitada e cumprida. Esta sentença (sentença arbitral) tem força de título executivo judicial e a mesma validade que a sentença de um juiz.</p>
              <p>A negociação, a mediação e a conciliação são métodos autocompositivos de resolução de conflito. Significa que as partes entram em um acordo sobre como resolver o problema. Na negociação elas negociam diretamente entre si, na mediação existe a figura de um mediador e na conciliação há o conciliador. Independente da presença de um terceiro para mediar ou conciliar, as partes têm que obrigatoriamente estar de acordo quanto a solução encontrada.</p>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body>
          <b-card-header v-b-toggle.accordion-3 header-tag="header" class="p-1" role="tab">
            O que é um árbitro?
            <img :src="require('@/assets/images/icon-plus.svg')" class="icon-plus">
            <img :src="require('@/assets/images/icon-minus.svg')" class="icon-minus">
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p>Árbitros são especialistas na área (não precisam ter formação jurídica) e são eles quem decidem como o conflito deve ser resolvido, fazendo as vezes de um juiz.</p>
              <p>Pode ser um engenheiro de software, um médico, um químico… qualquer profissional com capacidade comprovada no cadastro para se tornar árbitro na plataforma.</p>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body>
          <b-card-header v-b-toggle.accordion-4 header-tag="header" class="p-1" role="tab">
            O que faz uma câmara de arbitragem?
            <img :src="require('@/assets/images/icon-plus.svg')" class="icon-plus">
            <img :src="require('@/assets/images/icon-minus.svg')" class="icon-minus">
          </b-card-header>
          <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p>As câmaras de arbitragem são administradoras do processo de resolução do conflito. Elas não tomam decisões relacionadas ao conteúdo que está sendo discutido, somente sobre questões administrativas relacionadas ao procedimento da arbitragem.</p>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body>
          <b-card-header v-b-toggle.accordion-5 header-tag="header" class="p-1" role="tab">
            O que é a arbi-on?
            <img :src="require('@/assets/images/icon-plus.svg')" class="icon-plus">
            <img :src="require('@/assets/images/icon-minus.svg')" class="icon-minus">
          </b-card-header>
          <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p>A Arbi-ON é uma câmara de arbitragem online. Não faz mais do que administrar o conflito e utilizar a tecnologia para otimizar os benefícios da arbitragem, tornando o processo mais rápido, mais eficiente e mais seguro. Além de extremamente prático e acessível.</p>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body>
          <b-card-header v-b-toggle.accordion-6 header-tag="header" class="p-1" role="tab">
            É caro?
            <img :src="require('@/assets/images/icon-plus.svg')" class="icon-plus">
            <img :src="require('@/assets/images/icon-minus.svg')" class="icon-minus">
          </b-card-header>
          <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p>Na Arbi-ON não. Nosso objetivo é utilizar a tecnologia para tornar o custo acessível, assim a qualidade dos árbitros é mantida.</p>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body>
          <b-card-header v-b-toggle.accordion-7 header-tag="header" class="p-1" role="tab">
            Por que nunca ouvi falar de arbitragem?
            <img :src="require('@/assets/images/icon-plus.svg')" class="icon-plus">
            <img :src="require('@/assets/images/icon-minus.svg')" class="icon-minus">
          </b-card-header>
          <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p>A arbitragem se constituiu no Brasil como algo reservado às causas milionárias, mas em outros países, como EUA e França, por exemplo, é comum utilizar a arbitragem para resolver conflitos mais comuns.</p>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body>
          <b-card-header v-b-toggle.accordion-8 header-tag="header" class="p-1" role="tab">
            É melhor solucionar conflito via arbitragem? Por quê?
            <img :src="require('@/assets/images/icon-plus.svg')" class="icon-plus">
            <img :src="require('@/assets/images/icon-minus.svg')" class="icon-minus">
          </b-card-header>
          <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p>Sim, porque é muito mais rápido, os árbitros são especialistas na matéria em questão e o procedimento é confidencial.</p>
              <p>A Lei da Arbitragem (Lei nº 9.307/96) estabelece que a decisão do conflito deve ser proferida no prazo máximo de 180 (cento e oitenta) dias. E os árbitros são escolhidos pelas partes pela sua expertise na matéria em questão, ou seja, eles têm condições de avaliar integralmente a questão, eliminando, muitas vezes, a realização de perícias. </p>
              <p>Outra grande vantagem da arbitragem é sua confidencialidade. Diferente do Poder Judiciário em que, em regra, as ações são públicas, na arbitragem os processos são sigilosos.</p>
              <p>Além disso, vige o princípio da flexibilidade, isso quer dizer que as partes, na hora de entrarem em um acordo sobre o Termo de Arbitragem, podem selecionar a lei aplicável, se o árbitro pode resolver o conflito por equidade, os prazos para apresentação das petições, dentre outros detalhes que julguem importantes.</p>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body>
          <b-card-header v-b-toggle.accordion-9 header-tag="header" class="p-1" role="tab">
            A decisão proferida na arbi-on é passível de recurso na plataforma ou no poder judiciário?
            <img :src="require('@/assets/images/icon-plus.svg')" class="icon-plus">
            <img :src="require('@/assets/images/icon-minus.svg')" class="icon-minus">
          </b-card-header>
          <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p>Não cabe recurso contra a sentença arbitral, somente pedido de esclarecimento.</p>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body>
          <b-card-header v-b-toggle.accordion-10 header-tag="header" class="p-1" role="tab">
            Qual a validade jurídica da sentença arbitral?
            <img :src="require('@/assets/images/icon-plus.svg')" class="icon-plus">
            <img :src="require('@/assets/images/icon-minus.svg')" class="icon-minus">
          </b-card-header>
          <b-collapse id="accordion-10" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p>A sentença arbitral equivale a sentença judicial e tem validade de título executivo judicial, segundo inciso VII, art. 515 do CPC e art. 31 da Lei de Arbitragem (Lei 9.037/1996).</p>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body>
          <b-card-header v-b-toggle.accordion-11 header-tag="header" class="p-1" role="tab">
            Preciso de um advogado?
            <img :src="require('@/assets/images/icon-plus.svg')" class="icon-plus">
            <img :src="require('@/assets/images/icon-minus.svg')" class="icon-minus">
          </b-card-header>
          <b-collapse id="accordion-11" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p>Não é necessário, as partes podem diretamente solicitar o procedimento arbitral, bem como realizar suas alegações e apresentação de provas no decorrer do processo. No entanto, quem optar por não ser representado por advogado deve assinar digitalmente um termo de aceite que impede reclamar cerceamento de defesa ou hipossuficiência durante o procedimento.</p>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body>
          <b-card-header v-b-toggle.accordion-12 header-tag="header" class="p-1" role="tab">
            Existe a possibilidade de acordo durante o procedimento arbitral?
            <img :src="require('@/assets/images/icon-plus.svg')" class="icon-plus">
            <img :src="require('@/assets/images/icon-minus.svg')" class="icon-minus">
          </b-card-header>
          <b-collapse id="accordion-12" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p>Sim, a qualquer momento as partes podem chegar a um acordo, que será homologado pelo(s) árbitro(s).</p>
              <p>O acordo não exime as partes de pagarem as taxas devidas à plataforma nem mesmo os honorários devidos ao(s) árbitro(s).</p>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/colors.scss";

.title-faq {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.46;
  letter-spacing: -2px;
  margin-top: 195px;
  margin-bottom: 65px;

  @media (max-width: 768px) {
    font-size: 38px;
    line-height: 1;
    margin-top: 80px;
    margin-bottom: 35px;
  }

}

.card {
  background-color: $white;
  border: none;
  border-bottom: 1px solid $border;
  border-radius: 0;

  header {
    z-index: 10;
  }
}

.card-header {
  background-color: transparent;
  border-bottom: none;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  color: $black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;

  .icon-minus {
    display: block;
  }

  .icon-plus {
    display: none;
  }

  &.collapsed {
    .icon-minus {
      display: none;
    }

    .icon-plus {
      display: block;
    }
  }
}

.card-body p {
  font-size: 16px;
  line-height: 1.25;
  color: #8f8f8f;
  padding-right: 170px;

  @media (max-width: 768px) {
    padding-right: 0;
  }
}
</style>
