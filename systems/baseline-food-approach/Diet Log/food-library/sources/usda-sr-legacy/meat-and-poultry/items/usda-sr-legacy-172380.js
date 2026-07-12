/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "drumstick-bone-and-skin",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172380",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "drumstick-bone-and-skin",
      "kind": "unit",
      "label": "drumstick bone and skin"
    },
    {
      "gramsPerUnit": 199.0,
      "key": "leg-sum-of-drumstick-thigh-back-meat-only",
      "kind": "unit",
      "label": "leg (Sum of drumstick+thigh+back meat only)"
    },
    {
      "gramsPerUnit": 72.0,
      "key": "thigh-bone-and-skin",
      "kind": "unit",
      "label": "thigh bone and skin"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "back-bone-and-skin",
      "kind": "unit",
      "label": "back bone and skin"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Chicken, broilers or fryers, leg, meat only, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 174.0,
    "fat_g": 7.8,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.08,
    "magnesium_mg": 24.0,
    "omega3_g": 0.074,
    "phosphorus_mg": 205.0,
    "potassium_mg": 269.0,
    "protein_g": 24.2,
    "salt_g": 0.2475,
    "sat_fat_g": 2.11,
    "sodium_mg": 99.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172380",
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
