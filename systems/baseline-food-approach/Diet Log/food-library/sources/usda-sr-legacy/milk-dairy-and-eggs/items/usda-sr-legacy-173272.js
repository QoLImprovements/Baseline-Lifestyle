/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "2-eggs",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173272",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 96.0,
      "key": "2-eggs",
      "kind": "unit",
      "label": "2 eggs"
    }
  ],
  "name": "Fast foods, egg, scrambled",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 2.08,
    "energy_kcal": 212.0,
    "fat_g": 16.2,
    "fibre_g": 0.0,
    "folate_ug": 29.0,
    "iron_mg": 2.59,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 242.0,
    "potassium_mg": 147.0,
    "protein_g": 13.8,
    "salt_g": 0.4675,
    "sat_fat_g": 6.15,
    "sodium_mg": 187.0,
    "sugar_g": 1.64,
    "vitamin_a_ug": 176.0,
    "vitamin_c_mg": 3.3,
    "vitamin_e_mg": 0.96,
    "vitamin_k_ug": 9.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173272",
  "state": "Scrambled",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "milk-dairy-and-eggs",
    "scrambled"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
