from flask import Flask
from flask import render_template
from flask import request
import json

app = Flask(__name__)


@app.route('/', methods=["GET", "POST"])
def hello():
    if(request.method == "POST"):
        # comida = json.loads("{" + request.form['comida'] + "}")
        # bebida = json.loads("{" + request.form['bebida'] + "}")
        comida = "{" + request.form['comida'] + "}"
        bebida = request.form["bebida"]
        return render_template('selected.html', beb=comida, bebida=bebida)
    title = "Pide aquí tu comanda"
    return render_template('index.html',title=title)

app.run(port=8500)