export class Imovel
{
    public id: number;
    public tipo: number;
    public tipo_display: string;
    public detalhes: string;
    public tamanho: number;
    public finalidade: number;
    public finalidade_display: string;
    public foto: string | undefined;
    public quartos: number;
    public quartos_display: string;

    constructor() {
        this.id = 0;
        this.tipo = 0;
        this.tipo_display = '';
        this.detalhes = '';
        this.tamanho = 0;
        this.finalidade = 0;
        this.finalidade_display = '';
        this.quartos = 0;
        this.quartos_display = '';
    }
}