/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "chicken",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171047",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1046.0,
      "key": "chicken",
      "kind": "unit",
      "label": "chicken"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Chicken, broilers or fryers, meat and skin and giblets and neck, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.13,
    "energy_kcal": 891.0,
    "fat_g": 14.8,
    "fibre_g": 0.0,
    "folate_ug": 30.0,
    "iron_mg": 1.31,
    "magnesium_mg": 20.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 149.0,
    "potassium_mg": 189.0,
    "protein_g": 18.3,
    "salt_g": 0.175,
    "sat_fat_g": 4.24,
    "sodium_mg": 70.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 232.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171047",
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
