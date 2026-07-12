/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168322",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 11.5,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Pork, cured, bacon, pre-sliced, cooked, pan-fried",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 1.7,
    "energy_kcal": 1960.0,
    "fat_g": 35.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.95,
    "magnesium_mg": 31.0,
    "omega3_g": 0.261,
    "phosphorus_mg": 388.0,
    "potassium_mg": 499.0,
    "protein_g": 33.9,
    "salt_g": 4.2,
    "sat_fat_g": 12.0,
    "sodium_mg": 1680.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168322",
  "state": "Fried",
  "subcategory": "Pork Products",
  "tags": [
    "fried",
    "meat-and-poultry",
    "pork-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
