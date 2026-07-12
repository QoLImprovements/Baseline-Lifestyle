/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "2-tbsp",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174066",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 Tbsp"
    }
  ],
  "name": "Sauce, sweet and sour, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 38.2,
    "energy_kcal": 645.0,
    "fat_g": 0.02,
    "fibre_g": 0.1,
    "folate_ug": 8.0,
    "iron_mg": 0.21,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 99.0,
    "protein_g": 0.27,
    "salt_g": 1.3475,
    "sat_fat_g": 0.0,
    "sodium_mg": 539.0,
    "sugar_g": 18.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 8.7,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174066",
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
