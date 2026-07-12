/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "tsp",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-171321",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.1,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 6.5,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Spices, cloves, ground",
  "nutritionPerBasis": {
    "calcium_mg": 632.0,
    "carbs_g": 65.5,
    "energy_kcal": 274.0,
    "fat_g": 13.0,
    "fibre_g": 33.9,
    "folate_ug": 25.0,
    "iron_mg": 11.8,
    "magnesium_mg": 259.0,
    "omega3_g": 0.777,
    "phosphorus_mg": 104.0,
    "potassium_mg": 1020.0,
    "protein_g": 5.97,
    "salt_g": 0.6925,
    "sat_fat_g": 3.95,
    "sodium_mg": 277.0,
    "sugar_g": 2.38,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 8.82,
    "vitamin_k_ug": 142.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171321",
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
