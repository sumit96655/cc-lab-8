from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to SaaS Application!"

@app.route('/user/<name>')
def user(name):
    return f"Hello {name}, this is your SaaS app!"

if __name__ == '__main__':
    app.run()