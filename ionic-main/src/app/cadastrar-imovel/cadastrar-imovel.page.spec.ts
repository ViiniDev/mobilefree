import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarImovelPage } from './cadastrar-imovel.page';

describe('CadastrarImovelPage', () => {
  let component: CadastrarImovelPage;
  let fixture: ComponentFixture<CadastrarImovelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastrarImovelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
