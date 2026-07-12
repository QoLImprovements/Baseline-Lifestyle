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
  "id": "usda-sr-legacy-170936",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 4.4,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 1.4,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Spices, savory, ground",
  "nutritionPerBasis": {
    "calcium_mg": 2130.0,
    "carbs_g": 68.7,
    "energy_kcal": 1140.0,
    "fat_g": 5.91,
    "fibre_g": 45.7,
    "folate_ug": 0.0,
    "iron_mg": 37.9,
    "magnesium_mg": 377.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 1050.0,
    "protein_g": 6.73,
    "salt_g": 0.06,
    "sat_fat_g": 3.26,
    "sodium_mg": 24.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 257.0,
    "vitamin_c_mg": 50.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170936",
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
