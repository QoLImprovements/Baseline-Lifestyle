/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174543",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, sweet and sour, prepared-from-recipe",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 16.7,
    "energy_kcal": 79.0,
    "fat_g": 0.58,
    "fibre_g": 0.4,
    "folate_ug": 10.0,
    "iron_mg": 0.67,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 193.0,
    "protein_g": 1.84,
    "salt_g": 0.8675,
    "sat_fat_g": 0.144,
    "sodium_mg": 347.0,
    "sugar_g": 10.8,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174543",
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
