/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "wing-with-skin",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170747",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "wing-with-skin",
      "kind": "unit",
      "label": "wing, with skin"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "wing-without-skin",
      "kind": "unit",
      "label": "wing, without skin"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "wing-bone-and-skin-removed",
      "kind": "unit",
      "label": "wing, bone and skin removed"
    }
  ],
  "name": "KFC, Fried Chicken, EXTRA CRISPY, Wing, meat and skin with breading",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 11.7,
    "energy_kcal": 1410.0,
    "fat_g": 23.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.79,
    "magnesium_mg": 22.0,
    "omega3_g": 0.396,
    "phosphorus_mg": 192.0,
    "potassium_mg": 223.0,
    "protein_g": 20.8,
    "salt_g": 1.9125,
    "sat_fat_g": 4.8,
    "sodium_mg": 765.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170747",
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
