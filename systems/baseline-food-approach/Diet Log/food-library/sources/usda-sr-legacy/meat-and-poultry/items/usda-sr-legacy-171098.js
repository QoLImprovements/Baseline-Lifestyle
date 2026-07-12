/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "breast",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171098",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1769.0,
      "key": "breast",
      "kind": "unit",
      "label": "breast"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Turkey, whole, breast, meat only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.14,
    "energy_kcal": 114.0,
    "fat_g": 1.48,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.73,
    "magnesium_mg": 28.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 201.0,
    "potassium_mg": 242.0,
    "protein_g": 23.7,
    "salt_g": 0.2825,
    "sat_fat_g": 0.289,
    "sodium_mg": 113.0,
    "sugar_g": 0.05,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171098",
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
