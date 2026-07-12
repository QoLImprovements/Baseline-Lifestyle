/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174632",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "cup-1-nlea-serving",
      "kind": "unit",
      "label": "cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, QUAKER, MOTHER'S Cinnamon Oat Crunch",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 79.8,
    "energy_kcal": 1600.0,
    "fat_g": 4.56,
    "fibre_g": 8.1,
    "folate_ug": 37.0,
    "iron_mg": 3.24,
    "magnesium_mg": 106.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 347.0,
    "potassium_mg": 325.0,
    "protein_g": 10.6,
    "salt_g": 0.6875,
    "sat_fat_g": 0.82,
    "sodium_mg": 275.0,
    "sugar_g": 25.4,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 4.53,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174632",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "herbs-spices-and-seasonings",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
