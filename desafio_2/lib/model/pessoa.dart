import 'package:flutter/material.dart';

class Pessoa {
  String _nome = '';
  double _peso = 0;
  int _altura = 0;
  String _dataNascimento = '';

  Pessoa(this._nome, this._peso, this._altura, this._dataNascimento);

  String get nome => _nome;
  double get peso => _peso;
  int get altura => _altura;
  String get dataNascimento => _dataNascimento;

  set nome(String nome) {
    _nome = nome;
  }

  set peso(double peso) {
    _peso = peso;
  }

  set altura(int altura) {
    _altura = altura;
  }

  set dataNascimento(String dataNascimento) {
    _dataNascimento = dataNascimento;
  }

  // @override
  // String toString() {
  //   return 'Pessoa{_nome: $_nome, _peso: $_peso, _altura: $_altura, _dataNascimento: $_dataNascimento}';
  // }
}
