import base64
from io import BytesIO
from PIL import Image, ImageOps

from keras.models import load_model

import numpy as np

import os

import requests
import json

import re


def base64_to_image(base64_string):
    # Splitting the string to remove the MIME type prefix
    if "," in base64_string:
        header, base64_string = base64_string.split(",", 1)

    try:
        image_data = base64.b64decode(base64_string)
        image = Image.open(BytesIO(image_data)).convert("RGB")
        # image.save(save_path)  # Save the image
        return image
    except Exception as e:
        print(f"Erreur lors de la conversion de l'image : {e}")
        raise e


def predict(model, label, image):
    # Load the model
    model = load_model(model, compile=False)

    class_names = open(label, "r").readlines()  # Resizing and cropping the image

    data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)

    size = (224, 224)

    image = ImageOps.fit(image, size, Image.Resampling.LANCZOS)

    # Turn the image into a numpy array
    image_array = np.asarray(image)

    # Normalize the image
    normalized_image_array = (image_array.astype(np.float32) / 127.5) - 1

    data[0] = normalized_image_array

    # Predicts the model
    prediction = model.predict(data)
    index = np.argmax(prediction)
    class_name = class_names[index]
    confidence_score = prediction[0][index]

    gravite_dict = {
        "Cordana": "Modérée à sévère",
        "Healthy": "Aucune",
        "Pestalotiopsis": "Modérée",
        "Sigatoka": "Très élevée",
    }

    gravite = gravite_dict.get(class_name[2:].strip(), "Inconnue")

    malade = True

    if int(class_name[:1]) == 1:
        malade = False

    return {
        "malade": malade,
        "categorie": class_name[2:].strip(),
        "precision": float(confidence_score),
        "gravite": gravite,
    }


def recognitionBanane(base64_img):
    API_KEY = "2b10W9mT7TSqCDze24CizQO"  # Votre clé API
    PROJECT = "all"
    LANG = "fr"
    IMG_PATH = "media/temp_image.jpg"

    image = base64_to_image(base64_img)
    image.save(IMG_PATH, format="JPEG")

    api_endpoint = f"https://my-api.plantnet.org/v2/identify/{PROJECT}?api-key={API_KEY}&lang={LANG}"

    image_data = open(IMG_PATH, "rb")

    data = {"organs": ["leaf"]}

    files = [("images", (IMG_PATH, image_data))]

    response = requests.post(api_endpoint, files=files, data=data)
    json_result = response.json()

    # Vérifiez si la réponse contient des informations sur la banane plantain
    found_plantain = False

    if json_result.get("status_code") == 404:
        return False

    for result in json_result["results"][
        :2
    ]:  # Examiner seulement les deux premiers résultats
        scientific_name = result["species"]["scientificName"]
        if scientific_name.startswith("Musa") or scientific_name.startswith("Canna"):
            return True
    return False


def regBase64(base64_url):
    # Regex pour détecter une chaîne Base64 d'image
    regex_base64_url = r"data:image\/(png|jpg|jpeg|gif);base64,[A-Za-z0-9+/=]+"

    # Test de la chaîne avec la regex
    if re.match(regex_base64_url, base64_url):
        return True

    return False
