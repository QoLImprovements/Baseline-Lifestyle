/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-oz",
  "description": "Beef Products",
  "id": "usda-sr-legacy-174729",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Beef, New Zealand, imported, variety meats and by-products, liver, raw",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 3.6,
    "energy_kcal": 556.0,
    "fat_g": 4.05,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 8.44,
    "magnesium_mg": 19.0,
    "omega3_g": 0.348,
    "phosphorus_mg": 362.0,
    "potassium_mg": 327.0,
    "protein_g": 20.5,
    "salt_g": 0.1325,
    "sat_fat_g": 1.18,
    "sodium_mg": 53.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 28300.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.84,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174729",
  "state": "Raw",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
