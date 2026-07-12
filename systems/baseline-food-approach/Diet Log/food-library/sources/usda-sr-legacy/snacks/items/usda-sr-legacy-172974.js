/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "1-25-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-172974",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-25-cup-1-nlea-serving",
      "kind": "unit",
      "label": "1.25 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, QUAKER, Toasted Multigrain Crisps",
  "nutritionPerBasis": {
    "calcium_mg": 242.0,
    "carbs_g": 74.9,
    "energy_kcal": 372.0,
    "fat_g": 5.11,
    "fibre_g": 10.2,
    "folate_ug": 737.0,
    "iron_mg": 29.9,
    "magnesium_mg": 168.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 518.0,
    "potassium_mg": 438.0,
    "protein_g": 12.4,
    "salt_g": 0.9125,
    "sat_fat_g": 0.91,
    "sodium_mg": 365.0,
    "sugar_g": 16.3,
    "vitamin_a_ug": 359.0,
    "vitamin_c_mg": 11.5,
    "vitamin_e_mg": 3.11,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172974",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "ready-to-eat",
    "snacks"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
