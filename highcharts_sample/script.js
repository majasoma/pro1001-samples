const pokemon = ['Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle', 'Gengar'];
const victories = [12, 18, 9, 10, 15];

Highcharts.chart('pokemon-chart', {
    chart: {
        type: 'column',
        backgroundColor: '#ffffff'
    },

    title: {
        text: 'Pokémon Battle Victories'
    },

    xAxis: {
        categories: pokemon,
        title: {
            text: 'Pokémon'
        }
    },

    yAxis: {
        min: 0,
        title: {
            text: 'Number of Victories'
        }
    },

    tooltip: {
        pointFormat: '<b>{point.y}</b> victories'
    },

    accessibility: {
        enabled: true,
        description:
            'A column chart showing mock Pokémon battle results. ' +
            'Each Pokémon is represented by a column showing its total number of victories.'
    },

    series: [{
        name: 'Victories',
        data: victories,
        color: '#ffcb05'
    }]
});