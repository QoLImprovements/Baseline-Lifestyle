/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "3-hotcakes-5-3-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173299",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "3-hotcakes-5-3-oz",
      "kind": "unit",
      "label": "3 hotcakes 5.3 oz"
    }
  ],
  "name": "McDONALD'S, Hotcakes (plain)",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 38.3,
    "energy_kcal": 954.0,
    "fat_g": 5.84,
    "fibre_g": 1.4,
    "folate_ug": 96.0,
    "iron_mg": 1.83,
    "magnesium_mg": 19.0,
    "omega3_g": 0.321,
    "phosphorus_mg": 260.0,
    "potassium_mg": 173.0,
    "protein_g": 6.0,
    "salt_g": 0.895,
    "sat_fat_g": 1.16,
    "sodium_mg": 358.0,
    "sugar_g": 8.84,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173299",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
