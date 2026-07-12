/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "cup-packed",
  "description": "Sweets",
  "id": "usda-sr-legacy-168833",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "cup-packed",
      "kind": "unit",
      "label": "cup packed"
    },
    {
      "gramsPerUnit": 4.6,
      "key": "tsp-packed",
      "kind": "unit",
      "label": "tsp packed"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "cup-unpacked",
      "kind": "unit",
      "label": "cup unpacked"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "tsp-unpacked",
      "kind": "unit",
      "label": "tsp unpacked"
    },
    {
      "gramsPerUnit": 3.2,
      "key": "tsp-brownulated",
      "kind": "unit",
      "label": "tsp brownulated"
    }
  ],
  "name": "Sugars, brown",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 98.1,
    "energy_kcal": 380.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.71,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 4.0,
    "potassium_mg": 133.0,
    "protein_g": 0.12,
    "salt_g": 0.07,
    "sat_fat_g": 0.0,
    "sodium_mg": 28.0,
    "sugar_g": 97.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168833",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
