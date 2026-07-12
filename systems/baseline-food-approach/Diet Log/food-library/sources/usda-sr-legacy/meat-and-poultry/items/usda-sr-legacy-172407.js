/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "unit-yield-from-1-lb-ready-to-cook-capon",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172407",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 218.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-capon",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to cook capon)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 1418.0,
      "key": "capon",
      "kind": "unit",
      "label": "capon"
    }
  ],
  "name": "Chicken, capons, meat and skin and giblets and neck, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 0.04,
    "energy_kcal": 946.0,
    "fat_g": 11.7,
    "fibre_g": 0.0,
    "folate_ug": 26.0,
    "iron_mg": 1.79,
    "magnesium_mg": 23.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 239.0,
    "potassium_mg": 243.0,
    "protein_g": 28.4,
    "salt_g": 0.125,
    "sat_fat_g": 3.28,
    "sodium_mg": 50.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 220.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172407",
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
