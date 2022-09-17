export interface InterTarefa {
    tarefa: string,
    tempo: string,
    id: string, 
    completado: boolean,
    selecionado:boolean,
    editar: boolean
}
export interface InterTime { 
        hora: number,
        minuto: number,
        segundo: number,
    }