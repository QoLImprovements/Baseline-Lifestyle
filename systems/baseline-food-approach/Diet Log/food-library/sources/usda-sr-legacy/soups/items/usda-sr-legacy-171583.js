/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "can",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171583",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 390.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    },
    {
      "gramsPerUnit": 926.0,
      "key": "carton-32-oz",
      "kind": "unit",
      "label": "carton (32 oz)"
    },
    {
      "gramsPerUnit": 221.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Soup, vegetable broth, ready to serve",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 0.93,
    "energy_kcal": 22.0,
    "fat_g": 0.07,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.06,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 3.0,
    "potassium_mg": 19.0,
    "protein_g": 0.24,
    "salt_g": 0.74,
    "sat_fat_g": 0.028,
    "sodium_mg": 296.0,
    "sugar_g": 0.55,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171583",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "soups",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
