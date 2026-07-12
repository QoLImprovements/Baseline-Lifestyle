/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "thigh-thigh-without-skin",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170351",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "thigh-thigh-without-skin",
      "kind": "unit",
      "label": "thigh thigh without skin"
    },
    {
      "gramsPerUnit": 54.0,
      "key": "thigh-bone-and-skin-removed",
      "kind": "unit",
      "label": "thigh bone and skin removed"
    }
  ],
  "name": "POPEYES, Fried Chicken, Mild, Thigh, meat only, skin and breading removed",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 0.85,
    "energy_kcal": 188.0,
    "fat_g": 9.66,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.03,
    "magnesium_mg": 24.0,
    "omega3_g": 0.072,
    "phosphorus_mg": 187.0,
    "potassium_mg": 294.0,
    "protein_g": 24.3,
    "salt_g": 1.5025,
    "sat_fat_g": 2.94,
    "sodium_mg": 601.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170351",
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
