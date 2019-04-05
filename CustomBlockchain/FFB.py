# pip install Flask==0.12.2 requests==2.18.4
from uuid import uuid4

from flask import Flask, jsonify, request

from BcF import Blockchaininst

blockchain = Blockchaininst

# Instantiate our Node
app = Flask(__name__)
from FFN import NodeApp

app.register_blueprint(NodeApp)

# Generate a globally unique address for this node
node_identifier = str(uuid4()).replace('-', '')
print('Node 128-bit Universal Unique Identifier: {}'.format(node_identifier))


@app.route('/mine', methods=['GET'])
def mine():
    if len(blockchain.current_transactions) < 1:
        return "There are no transactions in this block", 403  # correct code?
    # We run the proof of work algorithm to get the next proof...
    last_block = blockchain.last_block
    proof = blockchain.proof_of_work(last_block)

    # We must receive a reward for finding the proof.
    # The sender is "0" to signify that this node has mined a new coin.

    # Forge the new Block by adding it to the chain
    previous_hash = blockchain.hash(last_block)
    block = blockchain.new_block(proof, previous_hash)
    response = {
        'message': "New Block Forged",
        'index': block['index'],
        'words': block['words'],
        'proof': block['proof'],
        'previous_hash': block['previous_hash'],
    }
    return jsonify(response), 200


@app.route('/transactions/new', methods=['POST'])
def new_transaction():
    values = request.get_json()

    # Check that the required fields are in the POST'ed data
    required = ['sender', 'word', 'meaning']
    if not all(k in values for k in required):
        return 'Missing values', 400

    index = blockchain.new_transaction(values['sender'], values['word'], values['meaning'])
    response = {'message': f'Word will be added to Block {index}'}

    return jsonify(response), 201


@app.errorhandler(404)
def page_not_found(e):
    return "STOP BREAKING THE BLOCKCHAIN!", 404


if __name__ == '__main__':
    from argparse import ArgumentParser

    parser = ArgumentParser()
    parser.add_argument('-p', '--port', default=5000, type=int, help='port to listen on')
    args = parser.parse_args()
    port = args.port
    app.run(host='0.0.0.0', port=port)
