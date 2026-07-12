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
  "id": "usda-sr-legacy-172855",
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
  "name": "Chicken, skin (drumsticks and thighs), raw",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.79,
    "energy_kcal": 440.0,
    "fat_g": 44.2,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.37,
    "magnesium_mg": 8.0,
    "omega3_g": 0.425,
    "phosphorus_mg": 95.0,
    "potassium_mg": 119.0,
    "protein_g": 9.58,
    "salt_g": 0.1275,
    "sat_fat_g": 12.1,
    "sodium_mg": 51.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172855",
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
