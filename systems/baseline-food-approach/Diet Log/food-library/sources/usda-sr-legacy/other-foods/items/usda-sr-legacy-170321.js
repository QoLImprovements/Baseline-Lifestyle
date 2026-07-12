/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "item",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170321",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 171.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "McDONALD'S, QUARTER POUNDER",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 22.2,
    "energy_kcal": 244.0,
    "fat_g": 11.6,
    "fibre_g": 1.6,
    "folate_ug": 56.0,
    "iron_mg": 2.41,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 124.0,
    "potassium_mg": 227.0,
    "protein_g": 14.1,
    "salt_g": 1.0675,
    "sat_fat_g": 4.01,
    "sodium_mg": 427.0,
    "sugar_g": 5.13,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170321",
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
