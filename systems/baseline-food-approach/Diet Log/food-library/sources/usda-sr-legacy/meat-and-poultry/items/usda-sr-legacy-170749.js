/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "drumstick-bone-and-skin-removed",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170749",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "drumstick-bone-and-skin-removed",
      "kind": "unit",
      "label": "drumstick, bone and skin removed"
    },
    {
      "gramsPerUnit": 59.0,
      "key": "drumstick-without-skin",
      "kind": "unit",
      "label": "drumstick, without skin"
    }
  ],
  "name": "POPEYES, Fried Chicken, Mild, Drumstick, meat only, skin and breading removed",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 0.04,
    "energy_kcal": 713.0,
    "fat_g": 7.14,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.06,
    "magnesium_mg": 25.0,
    "omega3_g": 0.047,
    "phosphorus_mg": 206.0,
    "potassium_mg": 321.0,
    "protein_g": 26.5,
    "salt_g": 1.195,
    "sat_fat_g": 2.28,
    "sodium_mg": 478.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170749",
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
