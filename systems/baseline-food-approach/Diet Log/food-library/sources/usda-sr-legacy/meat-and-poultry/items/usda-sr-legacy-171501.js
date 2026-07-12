/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-5-breast-bone-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171501",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 864.0,
      "key": "0-5-breast-bone-removed",
      "kind": "unit",
      "label": "0.5 breast, bone removed"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Turkey breast, pre-basted, meat and skin, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.0,
    "energy_kcal": 527.0,
    "fat_g": 3.46,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.66,
    "magnesium_mg": 21.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 214.0,
    "potassium_mg": 248.0,
    "protein_g": 22.2,
    "salt_g": 0.9925,
    "sat_fat_g": 0.98,
    "sodium_mg": 397.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171501",
  "state": "Roasted",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
