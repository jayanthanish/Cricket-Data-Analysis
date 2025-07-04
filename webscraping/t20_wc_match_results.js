navigate('https://stats.espncricinfo.com/ci/engine/records/team/match_results.html?id=14450;type=tournament');
collect(parse());


let matchSummary = []

const allRows = $('table.engineTable > tbody > tr.data1');

 allRows.each((index, element) => {
 		const tds = $(element).find('td');   //find the td
		matchSummary.push({
              'team1':  $(tds[0]).text(),
              'team2':  $(tds[1]).text(),
              'winner':  $(tds[2]).text(),
              'margin':  $(tds[3]).text(),
              'ground': $(tds[4]).text(),
              'matchDate': $(tds[5]).text(),
              'scorecard':   $(tds[6]).text() 
		})   
 })

return {
  "matchSummary": matchSummary
};
