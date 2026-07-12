/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-75-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-172986",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "0-75-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.75 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, QUAKER, MOTHER'S Toasted Oat Bran cereal",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 75.4,
    "energy_kcal": 372.0,
    "fat_g": 5.04,
    "fibre_g": 8.6,
    "folate_ug": 36.0,
    "iron_mg": 4.07,
    "magnesium_mg": 136.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 429.0,
    "potassium_mg": 489.0,
    "protein_g": 11.4,
    "salt_g": 1.6325,
    "sat_fat_g": 0.89,
    "sodium_mg": 653.0,
    "sugar_g": 15.6,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.49,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172986",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "grains-bread-and-pasta",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
