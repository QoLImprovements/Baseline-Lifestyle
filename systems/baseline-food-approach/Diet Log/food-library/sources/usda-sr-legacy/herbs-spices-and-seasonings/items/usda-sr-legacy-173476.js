/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "1-33-tbsp",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-173476",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-33-tbsp",
      "kind": "unit",
      "label": "1.33 tbsp"
    }
  ],
  "name": "Seasoning mix, dry, chili, original",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 56.6,
    "energy_kcal": 1400.0,
    "fat_g": 7.3,
    "fibre_g": 10.8,
    "folate_ug": 0.0,
    "iron_mg": 3.9,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 10.8,
    "salt_g": 11.55,
    "sat_fat_g": 0.0,
    "sodium_mg": 4620.0,
    "sugar_g": 8.67,
    "vitamin_a_ug": 2820.0,
    "vitamin_c_mg": 5.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173476",
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
