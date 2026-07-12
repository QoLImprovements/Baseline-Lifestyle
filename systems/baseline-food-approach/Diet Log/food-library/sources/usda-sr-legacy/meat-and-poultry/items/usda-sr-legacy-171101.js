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
  "id": "usda-sr-legacy-171101",
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
      "gramsPerUnit": 125.0,
      "key": "can-5-oz-yields",
      "kind": "unit",
      "label": "can (5 oz) yields"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "cup-drained",
      "kind": "unit",
      "label": "cup, drained"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "can-5-oz",
      "kind": "unit",
      "label": "can (5 oz)"
    }
  ],
  "name": "Turkey, canned, meat only, with broth",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 1.47,
    "energy_kcal": 706.0,
    "fat_g": 6.86,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.86,
    "magnesium_mg": 20.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 162.0,
    "potassium_mg": 224.0,
    "protein_g": 23.7,
    "salt_g": 1.295,
    "sat_fat_g": 2.0,
    "sodium_mg": 518.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171101",
  "state": "Canned",
  "subcategory": "Poultry Products",
  "tags": [
    "canned",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
