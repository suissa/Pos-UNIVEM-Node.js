const mongoose = require('mongoose');
const Schema = require('./schema');
const SchemaName = 'Aluno';

module.exports = mongoose.model(SchemaName, Schema);