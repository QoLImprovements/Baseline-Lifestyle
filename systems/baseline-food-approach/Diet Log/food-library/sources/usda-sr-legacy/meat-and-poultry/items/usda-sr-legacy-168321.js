/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice-cooked",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168321",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.1,
      "key": "slice-cooked",
      "kind": "unit",
      "label": "slice cooked"
    }
  ],
  "name": "Pork, cured, bacon, cooked, microwaved",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.48,
    "energy_kcal": 476.0,
    "fat_g": 34.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.14,
    "magnesium_mg": 34.0,
    "omega3_g": 0.235,
    "phosphorus_mg": 389.0,
    "potassium_mg": 525.0,
    "protein_g": 39.0,
    "salt_g": 4.45,
    "sat_fat_g": 11.6,
    "sodium_mg": 1780.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168321",
  "state": "Cooked",
  "subcategory": "Pork Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "pork-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
