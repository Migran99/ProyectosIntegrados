from flask import Flask, render_template, session, request, \
    copy_current_request_context
from flask_socketio import SocketIO, emit, join_room, leave_room, \
    close_room, rooms, disconnect

import json
import pandas as pd
from dataManagement import Account

## INICIALIZACION DEL SERVIDOR Y BASE DE DATOS++
df = pd.read_csv('plantilla.csv')
rows, cols = (12,2)
cuentas = [[0 for i in range(cols)] for j in range(rows)]
clients = [[0 for i in range(cols)] for j in range(rows)]
cocinaSID = -1
IDpedido = 0

async_mode = None
puerto = 5000 
ip = "192.168.1.106"
    
app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, async_mode=async_mode)

##----------------------------------------------

## ENRUTADOS+++++++++++++++++++++++++++++++++++

# APP MESAS
@app.route('/')
def index():
    mesa = request.args.get('mesa')
    pos = request.args.get('pos')
    #print(str(mesa) + " " + str(pos))
    data = {'table':mesa,'pos':pos}
    return render_template('Comanda.html', async_mode=socketio.async_mode, data=data)

# APP COCINA
@app.route('/cocina/')
def cocinaindex():
    return render_template('Cocina.html', async_mode=socketio.async_mode, data={'table':0,'pos':0})


##-----------------------------------------------

## EVENTOS++++++++++++++++++++++++++++++++++++++++



# CONEXION

@socketio.event
def conectado(data):
    global cocinaSID
    #print("%s connected" % (request.sid))
    
    if(data['mesa'] == -1 or data['pos'] == -1):
        print('Kitchen connected with SID: ' + request.sid)
        cocinaSID = request.sid
    else:
        print('New user at table [' + str(data['mesa']) + '] position [' + str(data['pos']) + ']')
        cuentas[data['mesa']][data['pos']] = Account('cuenta',df,data['mesa'],data['pos'])
        clients[data['mesa']][data['pos']] = request.sid



# MESA ENVIA COMANDA

@socketio.event
def comanda(message):
    global IDpedido
    mesa = message['mesa']
    pos = message['pos']
    for c in message['data']:
       # print(c)
        #print(c['product'] + " : " + c['quantity'])
        #print(int(c['quantity']) + 2)
        cuentas[mesa][pos].addProduct([c['product']],[int(c['quantity'])],message['id'])

    print(cuentas[mesa][pos].getOrders())
    emit('update',
         {'estado': 'Recibido', 'id': message['id']})
    emit('nuevaComanda',
         {'data': message['data'], 'id': IDpedido, 'mesa': message['mesa'], 'pos':message['pos'], 'total': cuentas[mesa][pos].getBill()},room=cocinaSID)
    IDpedido = IDpedido + 1


# COCINA ACTUALIZA ESTADO
@socketio.event
def cocinaUpdate(message):
    print(message)
    emit('update',
         {'estado': message['state'], 'id': message['id']},room=clients[message['mesa']][message['pos']])


# TESTS

@socketio.event
def prueba(message):
    print(message)



# DESCONEXION

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected', request.sid)

## -------------------------------------------------------


## EJECUCION DEL SERVER ++++++++++++++++++++++++++++++++++
if __name__ == '__main__':
    print("Running on " + str(ip) + ": " + str(puerto))
    socketio.run(app,port=puerto,host=ip)

##---------------------------------------------------------    