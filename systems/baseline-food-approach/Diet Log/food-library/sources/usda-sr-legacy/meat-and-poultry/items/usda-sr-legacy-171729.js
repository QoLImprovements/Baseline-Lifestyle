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
  "id": "usda-sr-legacy-171729",
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
  "name": "Beef, Australian, imported, grass-fed, seam fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 1.06,
    "energy_kcal": 562.0,
    "fat_g": 57.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.89,
    "magnesium_mg": 0.0,
    "omega3_g": 0.266,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 9.58,
    "salt_g": 0.085,
    "sat_fat_g": 26.6,
    "sodium_mg": 34.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171729",
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
