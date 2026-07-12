/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "thigh-with-skin",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172388",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 137.0,
      "key": "thigh-with-skin",
      "kind": "unit",
      "label": "thigh with skin"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "thigh-without-skin",
      "kind": "unit",
      "label": "thigh without skin"
    }
  ],
  "name": "Chicken, broilers or fryers, thigh, meat only, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.0,
    "energy_kcal": 750.0,
    "fat_g": 8.15,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.13,
    "magnesium_mg": 24.0,
    "omega3_g": 0.079,
    "phosphorus_mg": 230.0,
    "potassium_mg": 269.0,
    "protein_g": 24.8,
    "salt_g": 0.265,
    "sat_fat_g": 2.31,
    "sodium_mg": 106.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172388",
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
