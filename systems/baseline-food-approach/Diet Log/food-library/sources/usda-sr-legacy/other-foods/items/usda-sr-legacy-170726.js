/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "kid-s-meal-serving",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170726",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "kid-s-meal-serving",
      "kind": "unit",
      "label": "kid's meal Serving"
    },
    {
      "gramsPerUnit": 184.0,
      "key": "large-serving",
      "kind": "unit",
      "label": "large Serving"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "small-serving",
      "kind": "unit",
      "label": "small Serving"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "medium-serving",
      "kind": "unit",
      "label": "medium Serving"
    }
  ],
  "name": "WENDY'S, french fries",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 39.7,
    "energy_kcal": 1260.0,
    "fat_g": 14.1,
    "fibre_g": 4.0,
    "folate_ug": 0.0,
    "iron_mg": 0.93,
    "magnesium_mg": 33.0,
    "omega3_g": 0.64,
    "phosphorus_mg": 126.0,
    "potassium_mg": 625.0,
    "protein_g": 3.73,
    "salt_g": 0.5475,
    "sat_fat_g": 2.79,
    "sodium_mg": 219.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 2.0,
    "vitamin_k_ug": 6.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170726",
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
