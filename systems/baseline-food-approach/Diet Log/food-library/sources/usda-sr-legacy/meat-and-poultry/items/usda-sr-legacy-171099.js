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
  "id": "usda-sr-legacy-171099",
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
      "gramsPerUnit": 142.0,
      "key": "can-5-oz",
      "kind": "unit",
      "label": "can (5 oz)"
    }
  ],
  "name": "Chicken, canned, meat only, with broth",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.0,
    "energy_kcal": 690.0,
    "fat_g": 7.95,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.58,
    "magnesium_mg": 12.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 111.0,
    "potassium_mg": 138.0,
    "protein_g": 21.8,
    "salt_g": 1.2575,
    "sat_fat_g": 2.2,
    "sodium_mg": 503.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171099",
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
