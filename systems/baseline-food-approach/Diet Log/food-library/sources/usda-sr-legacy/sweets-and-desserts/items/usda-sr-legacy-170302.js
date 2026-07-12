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
  "id": "usda-sr-legacy-170302",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "biscuit",
      "kind": "unit",
      "label": "biscuit"
    }
  ],
  "name": "Fast food, biscuit",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 42.8,
    "energy_kcal": 370.0,
    "fat_g": 18.9,
    "fibre_g": 2.5,
    "folate_ug": 84.0,
    "iron_mg": 2.76,
    "magnesium_mg": 15.0,
    "omega3_g": 0.197,
    "phosphorus_mg": 474.0,
    "potassium_mg": 131.0,
    "protein_g": 7.08,
    "salt_g": 2.4475,
    "sat_fat_g": 11.8,
    "sodium_mg": 979.0,
    "sugar_g": 3.88,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 4.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170302",
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
