/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-5-bird",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171507",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 168.0,
      "key": "0-5-bird",
      "kind": "unit",
      "label": "0.5 bird"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Chicken, cornish game hens, meat and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 837.0,
    "fat_g": 14.0,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.78,
    "magnesium_mg": 18.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 140.0,
    "potassium_mg": 236.0,
    "protein_g": 17.2,
    "salt_g": 0.1525,
    "sat_fat_g": 3.89,
    "sodium_mg": 61.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171507",
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
