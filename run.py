import bottle, webbrowser, click


@bottle.route("/")
def index():
    return bottle.static_file("index.html", root='./views')

@bottle.route('/static/<filename>')
def static(filename):
    return bottle.static_file(filename, root='./static')

@bottle.route('/assets/<filepath:path>')
def asset(filepath):
    return bottle.static_file(filepath, root='./assets')

@click.command()
@click.option('--host', type=(str, int), default=("localhost", 8080))
@click.option('--no-debug', '-d', is_flag=True, default=False)
@click.option('--no-web', '-w', 'noweb', is_flag=True, default=False)
@click.option('--reloader', '-r', is_flag=True, default=False)
def run(host, no_debug, noweb, reloader):
    host, port = host
    if not noweb:
        webbrowser.open(f"http://{host}:{port}")
    bottle.run(host=host, port=port, debug=not no_debug, reloader=reloader)

if __name__ == "__main__":
    run()
