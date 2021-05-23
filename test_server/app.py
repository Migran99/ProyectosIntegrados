from flask import Flask, render_template, session, request, \
    copy_current_request_context
from flask_socketio import SocketIO, emit, join_room, leave_room, \
    close_room, rooms, disconnect

import json
import pandas as pd
from dataManagement import Account


df = pd.read_csv('plantilla.csv')
rows, cols = (12,2)
cuentas = [[0 for i in range(cols)] for j in range(rows)]

async_mode = None
puerto = 5000 
    
app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, async_mode=async_mode)

@app.route('/')
def index():
    mesa = request.args.get('mesa')
    pos = request.args.get('pos')
    print(str(mesa) + " " + str(pos))
    data = {'table':mesa,'pos':pos}
    return render_template('Comanda.html', async_mode=socketio.async_mode, data=data)

@socketio.event
def conectado(data):
    #print(message)
    print('New user at table [' + str(data['mesa']) + '] position [' + str(data['pos']) + ']')
    cuentas[data['mesa']][data['pos']] = Account('cuenta',df,data['mesa'],data['pos'])


@socketio.event
def comanda(message):
    mesa = message['mesa']
    pos = message['pos']
    for c in message['data']:
       # print(c)
        #print(c['product'] + " : " + c['quantity'])
        #print(int(c['quantity']) + 2)
        cuentas[mesa][pos].addProduct([c['product']],[int(c['quantity'])],message['id'])

    print(cuentas[mesa][pos].getOrders())

@socketio.event
def prueba(message):
    print(message)

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected', request.sid)

if __name__ == '__main__':
    print("Running on localhost:",puerto)
    socketio.run(app,port=puerto,host="192.168.1.106")