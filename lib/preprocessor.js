var
    complexity = require('complexity-report'),
    fs = require('fs'),
    path = require('path'),
    dateFormat = require('dateformat');

var createComplexityPreprocessor = function (config, helper, logger) {

    var
        log = logger.create('preprocessor.complexity'),
        complexityConfig = config.complexityConfig || {},
        outputDirectory = complexityConfig.dir || 'complexity_out',
        now = dateFormat(new Date(), 'yyyymmdd_HHMMss');

    complexityConfig.logicalor = complexityConfig.logicalor || true;
    complexityConfig.switchcase = complexityConfig.switchcase || true;
    complexityConfig.forin = complexityConfig.forin || false;
    complexityConfig.trycatch = complexityConfig.trycatch || false;
    complexityConfig.newmi = complexityConfig.newmi || false;

    helper.mkdirIfNotExists(path.resolve(outputDirectory), function () {
    });

    return function (content, file, done) {
        log.debug('complexity: processing "%s"\n', file.originalPath);
        var
            report = complexity.run(content),
            fileName = path.basename(file.originalPath, '.js') + '-' + now + '.json',
            filePath = path.join(path.dirname(file.originalPath), fileName),
            fullPath = path.resolve(path.join(outputDirectory, filePath));

        helper.mkdirIfNotExists(path.dirname(fullPath), function () {
        });

        fs.writeFile(fullPath, JSON.stringify(report, null, 4), function (err) {
            if (err) {
                log.error(err);
            }
        });
        done(content);
    };
};

createComplexityPreprocessor.$inject = ['config', 'helper', 'logger'];

module.exports = createComplexityPreprocessor;
