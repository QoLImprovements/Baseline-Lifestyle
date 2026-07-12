/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "tsp",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-173470",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 0.8,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 0.4,
      "key": "0-5-tsp",
      "kind": "unit",
      "label": "0.5 tsp"
    }
  ],
  "name": "Thyme, fresh",
  "nutritionPerBasis": {
    "calcium_mg": 405.0,
    "carbs_g": 24.4,
    "energy_kcal": 423.0,
    "fat_g": 1.68,
    "fibre_g": 14.0,
    "folate_ug": 45.0,
    "iron_mg": 17.4,
    "magnesium_mg": 160.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 106.0,
    "potassium_mg": 609.0,
    "protein_g": 5.56,
    "salt_g": 0.0225,
    "sat_fat_g": 0.467,
    "sodium_mg": 9.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 238.0,
    "vitamin_c_mg": 160.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173470",
  "state": "Unspecified",
  "subcategory": "Spices and Herbs",
  "tags": [
    "herbs-spices-and-seasonings",
    "spices-and-herbs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
