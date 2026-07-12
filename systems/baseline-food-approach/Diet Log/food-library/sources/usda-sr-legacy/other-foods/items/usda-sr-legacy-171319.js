/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "tbsp",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-171319",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 2.7,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Spices, chili powder",
  "nutritionPerBasis": {
    "calcium_mg": 330.0,
    "carbs_g": 49.7,
    "energy_kcal": 282.0,
    "fat_g": 14.3,
    "fibre_g": 34.8,
    "folate_ug": 28.0,
    "iron_mg": 17.3,
    "magnesium_mg": 149.0,
    "omega3_g": 0.519,
    "phosphorus_mg": 300.0,
    "potassium_mg": 1950.0,
    "protein_g": 13.5,
    "salt_g": 7.175,
    "sat_fat_g": 2.46,
    "sodium_mg": 2870.0,
    "sugar_g": 7.19,
    "vitamin_a_ug": 1480.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 38.1,
    "vitamin_k_ug": 106.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171319",
  "state": "Unspecified",
  "subcategory": "Spices and Herbs",
  "tags": [
    "other-foods",
    "spices-and-herbs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
