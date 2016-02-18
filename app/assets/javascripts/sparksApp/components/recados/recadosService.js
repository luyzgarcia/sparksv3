SparksApp.service('RecadosService', function ($resource, $q) {
    var listRecados = [];
    return {
        getRecados: function() {
            if(!listRecados || listRecados.length <= 0) {
                listRecados = [
                    {
                        id: 1,
                        titulo: 'Titulo do recado 1',
                        tipo: 'Aviso',
                        created_at: '10-02-2016'
                    },
                    {
                        id: 2,
                        titulo: 'Não hávera aula no dia 17-03',
                        tipo: 'Recado',
                        created_at: '22-02-2016'
                    }
                ]
            }

            return listRecados;

        },
        clearRecados: function() {
            listRecados = [
                {
                    id: 1,
                    titulo: 'Titulo do recado 1',
                    tipo: 'Aviso',
                    created_at: '10-02-2016'
                },
                {
                    id: 2,
                    titulo: 'Não hávera aula no dia 17-03',
                    tipo: 'Recado',
                    created_at: '22-02-2016'
                }
            ]
        },
        addRecado: function(recado) {
            listRecados.push(recado);

        }
    }
});