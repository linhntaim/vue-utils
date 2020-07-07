export class DataPlot {
    constructor() {
        this.dataPlot = {}
    }

    plot(name, plottedData) {
        this.dataPlot[name] = plottedData
        return this
    }

    data() {
        const data = {}
        for (let plot in this.dataPlot) {
            let plottedData = this.dataPlot[plot]
            for (let key in plottedData) {
                data[key] = plottedData[key]
            }
        }
        return data
    }

    dataByPlots(plots = []) {
        const data = {}
        for (let plot in this.dataPlot) {
            if (plots.indexOf(plot) !== -1) {
                let plottedData = this.dataPlot[plot]
                for (let key in plottedData) {
                    data[key] = plottedData[key]
                }
            }
        }
        return data
    }
}
