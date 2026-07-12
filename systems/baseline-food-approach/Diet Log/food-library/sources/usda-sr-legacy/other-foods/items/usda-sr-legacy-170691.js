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
  "id": "usda-sr-legacy-170691",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "Fast foods, cheeseburger; single, regular patty, with condiments",
  "nutritionPerBasis": {
    "calcium_mg": 123.0,
    "carbs_g": 25.5,
    "energy_kcal": 1130.0,
    "fat_g": 12.9,
    "fibre_g": 1.9,
    "folate_ug": 26.0,
    "iron_mg": 2.25,
    "magnesium_mg": 23.0,
    "omega3_g": 0.123,
    "phosphorus_mg": 142.0,
    "potassium_mg": 184.0,
    "protein_g": 13.5,
    "salt_g": 1.57,
    "sat_fat_g": 5.8,
    "sodium_mg": 628.0,
    "sugar_g": 5.24,
    "vitamin_a_ug": 55.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 5.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170691",
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
