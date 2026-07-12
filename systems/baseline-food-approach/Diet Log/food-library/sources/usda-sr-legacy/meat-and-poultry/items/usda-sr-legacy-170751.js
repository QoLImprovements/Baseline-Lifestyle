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
  "id": "usda-sr-legacy-170751",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "wing-bone-and-skin-removed",
      "kind": "unit",
      "label": "wing, bone and skin removed"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "wing-with-skin",
      "kind": "unit",
      "label": "wing, with skin"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "wing-without-skin",
      "kind": "unit",
      "label": "wing, without skin"
    }
  ],
  "name": "POPEYES, Fried Chicken, Mild, Wing, meat and skin with breading",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 13.5,
    "energy_kcal": 338.0,
    "fat_g": 22.5,
    "fibre_g": 0.6,
    "folate_ug": 0.0,
    "iron_mg": 1.38,
    "magnesium_mg": 22.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 149.0,
    "potassium_mg": 245.0,
    "protein_g": 20.4,
    "salt_g": 1.97,
    "sat_fat_g": 8.02,
    "sodium_mg": 788.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170751",
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
