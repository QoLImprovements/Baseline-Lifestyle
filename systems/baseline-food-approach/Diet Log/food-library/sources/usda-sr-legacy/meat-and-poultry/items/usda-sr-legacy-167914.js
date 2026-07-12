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
  "id": "usda-sr-legacy-167914",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.1,
      "key": "slice-cooked",
      "kind": "unit",
      "label": "slice cooked"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Pork, cured, bacon, cooked, baked",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 1.35,
    "energy_kcal": 548.0,
    "fat_g": 43.3,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.49,
    "magnesium_mg": 30.0,
    "omega3_g": 0.21,
    "phosphorus_mg": 506.0,
    "potassium_mg": 539.0,
    "protein_g": 35.7,
    "salt_g": 5.475,
    "sat_fat_g": 14.2,
    "sodium_mg": 2190.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167914",
  "state": "Baked",
  "subcategory": "Pork Products",
  "tags": [
    "baked",
    "meat-and-poultry",
    "pork-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
