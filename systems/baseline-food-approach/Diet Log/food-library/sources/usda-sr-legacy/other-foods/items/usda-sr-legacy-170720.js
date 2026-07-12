/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "item-7-6-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170720",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 219.0,
      "key": "item-7-6-oz",
      "kind": "unit",
      "label": "item 7.6 oz"
    }
  ],
  "name": "McDONALD'S, BIG MAC",
  "nutritionPerBasis": {
    "calcium_mg": 116.0,
    "carbs_g": 20.1,
    "energy_kcal": 257.0,
    "fat_g": 15.0,
    "fibre_g": 1.6,
    "folate_ug": 46.0,
    "iron_mg": 2.0,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 122.0,
    "potassium_mg": 181.0,
    "protein_g": 11.8,
    "salt_g": 1.15,
    "sat_fat_g": 3.8,
    "sodium_mg": 460.0,
    "sugar_g": 3.97,
    "vitamin_a_ug": 188.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170720",
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
