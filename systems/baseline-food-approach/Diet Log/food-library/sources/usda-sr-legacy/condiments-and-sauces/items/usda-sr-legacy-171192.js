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
  "id": "usda-sr-legacy-171192",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "serving-1-2-cup",
      "kind": "unit",
      "label": "serving 1/2 cup"
    }
  ],
  "name": "Sauce, pasta, spaghetti/marinara, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 7.43,
    "energy_kcal": 50.0,
    "fat_g": 1.61,
    "fibre_g": 1.8,
    "folate_ug": 13.0,
    "iron_mg": 0.73,
    "magnesium_mg": 18.0,
    "omega3_g": 0.082,
    "phosphorus_mg": 34.0,
    "potassium_mg": 320.0,
    "protein_g": 1.39,
    "salt_g": 1.0925,
    "sat_fat_g": 0.218,
    "sodium_mg": 437.0,
    "sugar_g": 4.91,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 2.4,
    "vitamin_k_ug": 13.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171192",
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
