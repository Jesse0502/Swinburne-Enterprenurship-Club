from flask import Flask, jsonify
import json

app = Flask(__name__)

@app.route('/events-history', methods=['GET'])
def get_events_history():
    try:
        print('data')
        with open('eventsHistory.json', 'r') as json_file:
            data = json.load(json_file)
        return {'data': jsonify(data), 'msg': 'Got Data'}
    except:
        return {'data': [], 'msg': 'Something went wrong!'}

if __name__ == '__main__':
    app.run(debug=True)
