/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "lb",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171456",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 453.0,
      "key": "lb",
      "kind": "unit",
      "label": "lb"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Chicken, gizzard, all classes, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 393.0,
    "fat_g": 2.06,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 2.49,
    "magnesium_mg": 15.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 148.0,
    "potassium_mg": 237.0,
    "protein_g": 17.7,
    "salt_g": 0.1725,
    "sat_fat_g": 0.529,
    "sodium_mg": 69.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171456",
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
