/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "bar",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173477",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Clif Z bar",
  "nutritionPerBasis": {
    "calcium_mg": 444.0,
    "carbs_g": 74.7,
    "energy_kcal": 416.0,
    "fat_g": 9.72,
    "fibre_g": 8.3,
    "folate_ug": 20.0,
    "iron_mg": 2.7,
    "magnesium_mg": 82.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 244.0,
    "potassium_mg": 333.0,
    "protein_g": 5.55,
    "salt_g": 0.9375,
    "sat_fat_g": 2.72,
    "sodium_mg": 375.0,
    "sugar_g": 30.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 39.1,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 8.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173477",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
