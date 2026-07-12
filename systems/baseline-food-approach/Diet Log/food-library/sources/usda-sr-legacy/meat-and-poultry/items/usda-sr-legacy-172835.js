/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "inside-drum",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172835",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 572.0,
      "key": "inside-drum",
      "kind": "unit",
      "label": "inside drum"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Emu, inside drum, raw",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 0.0,
    "energy_kcal": 453.0,
    "fat_g": 1.49,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 5.23,
    "magnesium_mg": 26.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 229.0,
    "potassium_mg": 318.0,
    "protein_g": 22.2,
    "salt_g": 0.255,
    "sat_fat_g": 0.386,
    "sodium_mg": 102.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172835",
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
