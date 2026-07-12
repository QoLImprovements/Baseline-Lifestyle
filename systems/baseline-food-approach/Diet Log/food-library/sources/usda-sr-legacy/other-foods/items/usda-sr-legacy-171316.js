/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "tbsp-whole",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-171316",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.7,
      "key": "tbsp-whole",
      "kind": "unit",
      "label": "tbsp, whole"
    },
    {
      "gramsPerUnit": 2.1,
      "key": "tsp-whole",
      "kind": "unit",
      "label": "tsp, whole"
    }
  ],
  "name": "Spices, anise seed",
  "nutritionPerBasis": {
    "calcium_mg": 646.0,
    "carbs_g": 50.0,
    "energy_kcal": 337.0,
    "fat_g": 15.9,
    "fibre_g": 14.6,
    "folate_ug": 10.0,
    "iron_mg": 37.0,
    "magnesium_mg": 170.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 440.0,
    "potassium_mg": 1440.0,
    "protein_g": 17.6,
    "salt_g": 0.04,
    "sat_fat_g": 0.586,
    "sodium_mg": 16.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 21.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171316",
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
