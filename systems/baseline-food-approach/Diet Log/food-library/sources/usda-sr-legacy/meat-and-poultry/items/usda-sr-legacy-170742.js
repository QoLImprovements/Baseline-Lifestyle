/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "thigh-bone-and-skin-removed",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170742",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 72.0,
      "key": "thigh-bone-and-skin-removed",
      "kind": "unit",
      "label": "thigh, bone and skin removed"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "thigh-without-skin",
      "kind": "unit",
      "label": "thigh, without skin"
    }
  ],
  "name": "KFC, Fried Chicken, EXTRA CRISPY, Thigh, meat only, skin and breading removed",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 0.0,
    "energy_kcal": 179.0,
    "fat_g": 9.96,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.96,
    "magnesium_mg": 22.0,
    "omega3_g": 0.1,
    "phosphorus_mg": 223.0,
    "potassium_mg": 271.0,
    "protein_g": 22.4,
    "salt_g": 1.395,
    "sat_fat_g": 2.71,
    "sodium_mg": 558.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170742",
  "state": "Fried",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
