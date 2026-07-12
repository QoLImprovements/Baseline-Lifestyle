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
  "id": "usda-sr-legacy-170926",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.2,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 1.8,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Spices, ginger, ground",
  "nutritionPerBasis": {
    "calcium_mg": 114.0,
    "carbs_g": 71.6,
    "energy_kcal": 1400.0,
    "fat_g": 4.24,
    "fibre_g": 14.1,
    "folate_ug": 13.0,
    "iron_mg": 19.8,
    "magnesium_mg": 214.0,
    "omega3_g": 0.223,
    "phosphorus_mg": 168.0,
    "potassium_mg": 1320.0,
    "protein_g": 8.98,
    "salt_g": 0.0675,
    "sat_fat_g": 2.6,
    "sodium_mg": 27.0,
    "sugar_g": 3.39,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170926",
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
