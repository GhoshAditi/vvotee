import os
import binascii

secret_key = binascii.hexlify(os.urandom(64)).decode()
print(secret_key)