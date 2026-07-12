/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171515",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "4-pieces",
      "kind": "unit",
      "label": "4 pieces"
    }
  ],
  "name": "Chicken breast tenders, breaded, uncooked",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 15.0,
    "energy_kcal": 263.0,
    "fat_g": 15.8,
    "fibre_g": 1.1,
    "folate_ug": 12.0,
    "iron_mg": 1.11,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 211.0,
    "potassium_mg": 214.0,
    "protein_g": 14.7,
    "salt_g": 1.34,
    "sat_fat_g": 3.26,
    "sodium_mg": 536.0,
    "sugar_g": 0.37,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 14.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171515",
  "state": "Cooked",
  "subcategory": "Poultry Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
