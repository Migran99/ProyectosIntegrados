## @package DataManagement
# Codigo gestion de base de datos para los pedidos

import pickle
import pandas as pd

prices = {'Cocacola': 2, 'Agua': 1,'Fanta': 1.4,'Cerveza': 1.5,'Cafe': 2.5,'Croquetas': 3.5, 'Serranito': 2.5, 'Solomillo': 3, 'Tortilla': 3.5,'PescadoFrito':4.5}

## Clase para las cuentas
# Contienen nombre, posicion, mesa y la informacion del pedido recibido
class Account:
    def __init__(self,name,data,table,pos):
        self.name = name
        self.orders = data
        self.total = 0
        self.table = table
        self.id = 0
        self.pos = pos
    
    def calcTotal(self):
        self.total = sum(self.orders.loc[:,'Precio'])

    def addProduct(self,name,quantity,id):
        for n,q in zip(name,quantity):
            self.orders = self.orders.append({
                'Producto': n,'Cantidad':q,'ID Pedido':id,'Posicion': self.pos,'Mesa':self.table,'Precio':q*prices[n]
                                                                }, ignore_index=True)
    
    def getOrders(self):
        return self.orders

    def getBill(self):
        self.calcTotal()
        return self.total
   

## En caso de querer guardar una cuenta podemos utilizar Pickle
# No esta en uso actualmente
def exportAccount(account,name='export.pkl',path=''):
    pickle.dump(account,open(path+name,'wb'))

def importAccount(name='export.pkl',path=''):
    return pickle.load(open(path+name,'rb'))