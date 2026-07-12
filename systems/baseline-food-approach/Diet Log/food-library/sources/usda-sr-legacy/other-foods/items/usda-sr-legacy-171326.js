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
  "id": "usda-sr-legacy-171326",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 2.2,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Spices, nutmeg, ground",
  "nutritionPerBasis": {
    "calcium_mg": 184.0,
    "carbs_g": 49.3,
    "energy_kcal": 525.0,
    "fat_g": 36.3,
    "fibre_g": 20.8,
    "folate_ug": 76.0,
    "iron_mg": 3.04,
    "magnesium_mg": 183.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 213.0,
    "potassium_mg": 350.0,
    "protein_g": 5.84,
    "salt_g": 0.04,
    "sat_fat_g": 25.9,
    "sodium_mg": 16.0,
    "sugar_g": 2.99,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171326",
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
