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
  "id": "usda-sr-legacy-173617",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 133.0,
      "key": "thigh-with-skin",
      "kind": "unit",
      "label": "thigh with skin"
    },
    {
      "gramsPerUnit": 258.0,
      "key": "leg-with-skin-sum-of-drumstick-thigh-back",
      "kind": "unit",
      "label": "leg, with skin (Sum of drumstick+thigh+back)"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "back-with-skin",
      "kind": "unit",
      "label": "back with skin"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "drumstick-with-skin",
      "kind": "unit",
      "label": "drumstick with skin"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Chicken, broilers or fryers, leg, meat and skin, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 184.0,
    "fat_g": 8.99,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.09,
    "magnesium_mg": 23.0,
    "omega3_g": 0.073,
    "phosphorus_mg": 202.0,
    "potassium_mg": 264.0,
    "protein_g": 24.0,
    "salt_g": 0.245,
    "sat_fat_g": 2.45,
    "sodium_mg": 98.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173617",
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
