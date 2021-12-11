import json


def dict_to_json(user):
    """ dict_to_json function convert user dict into json
        params
            user(`dict`): user data
        Return
            user('json'): user json data
    """
    if user:
        user = json.dumps(user, indent = 4)

    return user


if __name__ == "__main__":

    user = {
        'name': 'John Doe',
        'age': 35,
        'city': 'Collingwood'
    }
    print(dict_to_json(user))
