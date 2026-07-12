/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "wing-bone-and-skin-removed",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170743",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "wing-bone-and-skin-removed",
      "kind": "unit",
      "label": "wing, bone and skin removed"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "wing-without-skin",
      "kind": "unit",
      "label": "wing, without skin"
    }
  ],
  "name": "KFC, Fried Chicken, EXTRA CRISPY, Wing, meat only, skin and breading removed",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 2.97,
    "energy_kcal": 986.0,
    "fat_g": 12.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.89,
    "magnesium_mg": 25.0,
    "omega3_g": 0.19,
    "phosphorus_mg": 226.0,
    "potassium_mg": 265.0,
    "protein_g": 28.7,
    "salt_g": 1.785,
    "sat_fat_g": 2.6,
    "sodium_mg": 714.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170743",
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
