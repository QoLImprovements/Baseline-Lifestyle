/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "biscuit",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172086",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "biscuit",
      "kind": "unit",
      "label": "biscuit"
    }
  ],
  "name": "POPEYES, biscuit",
  "nutritionPerBasis": {
    "calcium_mg": 108.0,
    "carbs_g": 41.0,
    "energy_kcal": 1680.0,
    "fat_g": 23.7,
    "fibre_g": 3.8,
    "folate_ug": 91.0,
    "iron_mg": 2.51,
    "magnesium_mg": 13.0,
    "omega3_g": 0.401,
    "phosphorus_mg": 309.0,
    "potassium_mg": 173.0,
    "protein_g": 6.0,
    "salt_g": 1.8625,
    "sat_fat_g": 11.5,
    "sodium_mg": 745.0,
    "sugar_g": 3.46,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.02,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172086",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
