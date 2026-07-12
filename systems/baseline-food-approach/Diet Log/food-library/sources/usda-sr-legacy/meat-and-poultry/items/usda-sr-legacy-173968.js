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
  "id": "usda-sr-legacy-173968",
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
  "name": "Beef, Australian, imported, Wagyu, seam fat, Aust. marble score 9, raw",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 0.0,
    "energy_kcal": 627.0,
    "fat_g": 67.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.91,
    "magnesium_mg": 0.0,
    "omega3_g": 0.11,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 5.16,
    "salt_g": 0.0675,
    "sat_fat_g": 22.5,
    "sodium_mg": 27.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173968",
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
