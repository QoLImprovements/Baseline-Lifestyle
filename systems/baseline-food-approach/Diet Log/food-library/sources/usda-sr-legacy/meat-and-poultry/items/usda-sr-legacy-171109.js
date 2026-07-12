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
  "id": "usda-sr-legacy-171109",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "0-5-bird",
      "kind": "unit",
      "label": "0.5 bird"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "bird-whole",
      "kind": "unit",
      "label": "bird whole"
    }
  ],
  "name": "Chicken, cornish game hens, meat only, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 561.0,
    "fat_g": 3.87,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.77,
    "magnesium_mg": 19.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 149.0,
    "potassium_mg": 250.0,
    "protein_g": 23.3,
    "salt_g": 0.1575,
    "sat_fat_g": 0.99,
    "sodium_mg": 63.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171109",
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
