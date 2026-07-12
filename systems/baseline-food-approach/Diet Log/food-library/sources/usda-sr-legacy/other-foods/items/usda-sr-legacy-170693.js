/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "sandwich",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170693",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "Fast foods, hamburger; single, regular patty; plain",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 31.5,
    "energy_kcal": 297.0,
    "fat_g": 12.0,
    "fibre_g": 1.7,
    "folate_ug": 80.0,
    "iron_mg": 3.06,
    "magnesium_mg": 27.0,
    "omega3_g": 0.136,
    "phosphorus_mg": 134.0,
    "potassium_mg": 197.0,
    "protein_g": 16.5,
    "salt_g": 0.8275,
    "sat_fat_g": 4.49,
    "sodium_mg": 331.0,
    "sugar_g": 4.88,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170693",
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
