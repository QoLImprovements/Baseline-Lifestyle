/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "6-inch-sub",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170316",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 237.0,
      "key": "6-inch-sub",
      "kind": "unit",
      "label": "6 inch sub"
    },
    {
      "gramsPerUnit": 474.0,
      "key": "12-inch-sub",
      "kind": "unit",
      "label": "12 inch sub"
    }
  ],
  "name": "SUBWAY, tuna sub on white bread with lettuce and tomato",
  "nutritionPerBasis": {
    "calcium_mg": 136.0,
    "carbs_g": 16.0,
    "energy_kcal": 927.0,
    "fat_g": 12.0,
    "fibre_g": 0.7,
    "folate_ug": 51.0,
    "iron_mg": 1.57,
    "magnesium_mg": 22.0,
    "omega3_g": 0.888,
    "phosphorus_mg": 109.0,
    "potassium_mg": 177.0,
    "protein_g": 12.3,
    "salt_g": 0.8225,
    "sat_fat_g": 2.19,
    "sodium_mg": 329.0,
    "sugar_g": 1.93,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.57,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170316",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
