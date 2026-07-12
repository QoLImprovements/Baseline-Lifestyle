/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "back",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171138",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1245.0,
      "key": "back",
      "kind": "unit",
      "label": "back"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Turkey, back, from whole bird, meat and skin, with added solution, raw",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.15,
    "energy_kcal": 864.0,
    "fat_g": 15.4,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.78,
    "magnesium_mg": 17.0,
    "omega3_g": 0.329,
    "phosphorus_mg": 159.0,
    "potassium_mg": 185.0,
    "protein_g": 16.9,
    "salt_g": 0.3925,
    "sat_fat_g": 2.73,
    "sodium_mg": 157.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171138",
  "state": "Raw",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
