<template>
    <v-dialog v-model="props.dialog" width="auto" max-width="650" transition="dialog-bottom-transition">
        <v-card>
            <v-card-title>Termos e Condições de Uso</v-card-title>
            <v-card-text>
                <h2>1. Aceitação dos Termos</h2>
                <p>Ao utilizar o sistema de gerenciamento de estoque "Estoquei" (doravante denominado "Sistema"), o
                    usuário concorda com os termos e condições descritos neste documento. Caso não concorde com os
                    termos, o usuário deve interromper o uso do Sistema imediatamente.</p>

                <h2>2. Definições</h2>
                <ul>
                    <li><strong>Usuário:</strong> Pessoa física ou jurídica que utiliza o Sistema para gerenciar
                        estoques de produtos.</li>
                    <li><strong>Sistema:</strong> Plataforma de gerenciamento de estoque destinada a autônomos,
                        desenvolvida para facilitar o controle de produtos e análise de estoque.</li>
                </ul>

                <h2>3. Cadastro e Responsabilidades</h2>
                <p><strong>3.1.</strong> O usuário deverá fornecer informações precisas e atualizadas ao se cadastrar no
                    Sistema. A responsabilidade pela veracidade das informações é exclusivamente do usuário.</p>
                <p><strong>3.2.</strong> O usuário é responsável por manter a confidencialidade de suas credenciais de
                    acesso e por todas as atividades realizadas com a sua conta.</p>

                <h2>4. Uso do Sistema</h2>
                <p><strong>4.1.</strong> O Sistema permite ao usuário cadastrar produtos, monitorar estoques e gerar
                    relatórios para auxiliar na gestão de suas atividades autônomas.</p>
                <p><strong>4.2.</strong> O usuário se compromete a utilizar o Sistema exclusivamente para fins legais e
                    de acordo com as finalidades para as quais foi criado.</p>
                <p><strong>4.3.</strong> É proibido o uso do Sistema para armazenar, compartilhar ou transmitir
                    informações que violem leis, regulamentos ou direitos de terceiros.</p>

                <h2>5. Planos e Pagamentos</h2>
                <p><strong>5.1.</strong> O Sistema poderá oferecer planos gratuitos e pagos, com diferentes
                    funcionalidades e limites de uso.</p>
                <p><strong>5.2.</strong> Os valores cobrados, quando aplicáveis, serão claramente informados no momento
                    da contratação de um plano pago. Os pagamentos deverão ser realizados conforme as instruções
                    fornecidas pelo Sistema.</p>

                <h2>6. Privacidade e Proteção de Dados</h2>
                <p><strong>6.1.</strong> As informações coletadas pelo Sistema serão tratadas em conformidade com a
                    legislação aplicável de proteção de dados, incluindo a Lei Geral de Proteção de Dados (LGPD) no
                    Brasil.</p>
                <p><strong>6.2.</strong> O Sistema poderá coletar dados de uso e estatísticas para fins de melhoria dos
                    serviços, respeitando a privacidade dos usuários.</p>

                <h2>7. Limitação de Responsabilidade</h2>
                <p><strong>7.1.</strong> O Sistema será fornecido "como está" e "conforme disponível", sem garantias de
                    qualquer tipo, expressas ou implícitas. O uso do Sistema é por conta e risco do usuário.</p>
                <p><strong>7.2.</strong> O Sistema não se responsabiliza por eventuais perdas de dados, falhas técnicas,
                    interrupções de serviço ou qualquer outro prejuízo que o usuário possa sofrer em decorrência do uso
                    da plataforma.</p>

                <h2>8. Modificações no Sistema e nos Termos</h2>
                <p><strong>8.1.</strong> O Sistema se reserva o direito de modificar as funcionalidades, suspender ou
                    encerrar o serviço a qualquer momento, mediante aviso prévio aos usuários.</p>
                <p><strong>8.2.</strong> Estes Termos poderão ser atualizados a qualquer momento, sendo de
                    responsabilidade do usuário verificar as atualizações periodicamente. O uso contínuo do Sistema após
                    as modificações implica a aceitação dos novos termos.</p>

                <h2>9. Cancelamento e Rescisão</h2>
                <p><strong>9.1.</strong> O usuário pode cancelar sua conta a qualquer momento, mediante solicitação por
                    meio dos canais de suporte do Sistema.</p>
                <p><strong>9.2.</strong> O Sistema se reserva o direito de suspender ou encerrar contas que violem estes
                    Termos, sem necessidade de aviso prévio.</p>

                <h2>10. Disposições Gerais</h2>
                <p><strong>10.1.</strong> Estes Termos constituem o acordo integral entre o Sistema e o usuário,
                    substituindo quaisquer acordos anteriores.</p>
                <p><strong>10.2.</strong> Eventuais disputas decorrentes deste Termo serão resolvidas de acordo com a
                    legislação vigente no Brasil.</p>

                <h2>11. Contato</h2>
                <p>Em caso de dúvidas ou solicitações, entre em contato com o suporte pelo e-mail: <a
                        href="mailto:suporte@estoquei.com">suporte@estoquei.com</a>.</p>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn class="ms-auto" text="Ok" @click="$emit('toggle')"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>


<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    dialog: Boolean,
})
</script>
<style scoped>
h2 {
    color: #333;
}

h1 {
    text-align: center;
}

p {
    margin-bottom: 10px;
}

ul {
    margin-left: 20px;
}
</style>