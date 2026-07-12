/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "serving-1-2-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171597",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "serving-1-2-cup",
      "kind": "unit",
      "label": "serving 1/2 cup"
    },
    {
      "gramsPerUnit": 257.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Sauce, pasta, spaghetti/marinara, ready-to-serve, low sodium",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 8.06,
    "energy_kcal": 214.0,
    "fat_g": 1.48,
    "fibre_g": 1.8,
    "folate_ug": 13.0,
    "iron_mg": 0.78,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 319.0,
    "protein_g": 1.41,
    "salt_g": 0.075,
    "sat_fat_g": 0.17,
    "sodium_mg": 30.0,
    "sugar_g": 5.5,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 2.4,
    "vitamin_k_ug": 13.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171597",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "condiments-and-sauces",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
