import camelot


tables = camelot.read_pdf('handai.pdf', pages='19-21')
tables.export('camelot.csv', f='csv')


# CLI commend
# camelot --format csv --pages 19,20, 21 --output camelot.csv lattice handai.pdf
