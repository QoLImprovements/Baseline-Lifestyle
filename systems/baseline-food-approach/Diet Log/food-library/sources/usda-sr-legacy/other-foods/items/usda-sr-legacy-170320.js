/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "item-4-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170320",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 119.0,
      "key": "item-4-oz",
      "kind": "unit",
      "label": "item 4 oz"
    }
  ],
  "name": "McDONALD'S, Cheeseburger",
  "nutritionPerBasis": {
    "calcium_mg": 167.0,
    "carbs_g": 27.8,
    "energy_kcal": 1100.0,
    "fat_g": 11.8,
    "fibre_g": 1.1,
    "folate_ug": 59.0,
    "iron_mg": 2.35,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 200.0,
    "protein_g": 13.0,
    "salt_g": 1.565,
    "sat_fat_g": 4.44,
    "sodium_mg": 626.0,
    "sugar_g": 6.22,
    "vitamin_a_ug": 243.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170320",
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
