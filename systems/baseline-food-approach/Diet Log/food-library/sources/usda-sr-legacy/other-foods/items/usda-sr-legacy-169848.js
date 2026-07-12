/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "cup",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169848",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 94.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Restaurant, family style, hash browns",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 26.6,
    "energy_kcal": 197.0,
    "fat_g": 8.99,
    "fibre_g": 2.7,
    "folate_ug": 23.0,
    "iron_mg": 0.56,
    "magnesium_mg": 26.0,
    "omega3_g": 0.623,
    "phosphorus_mg": 71.0,
    "potassium_mg": 416.0,
    "protein_g": 2.49,
    "salt_g": 1.17,
    "sat_fat_g": 1.69,
    "sodium_mg": 468.0,
    "sugar_g": 1.38,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 32.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169848",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "other-foods",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
