/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-167542",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "bar-1-oz",
      "kind": "unit",
      "label": "bar (1 oz)"
    }
  ],
  "name": "Snacks, granola bars, hard, plain",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 64.4,
    "energy_kcal": 1970.0,
    "fat_g": 19.8,
    "fibre_g": 5.3,
    "folate_ug": 23.0,
    "iron_mg": 2.95,
    "magnesium_mg": 97.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 277.0,
    "potassium_mg": 336.0,
    "protein_g": 10.1,
    "salt_g": 0.735,
    "sat_fat_g": 2.37,
    "sodium_mg": 294.0,
    "sugar_g": 28.6,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 2.09,
    "vitamin_k_ug": 14.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167542",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "other-foods",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
