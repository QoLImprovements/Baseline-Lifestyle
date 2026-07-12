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
  "id": "usda-sr-legacy-174623",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "cup-1-nlea-serving",
      "kind": "unit",
      "label": "cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, QUAKER, Oatmeal Squares, cinnamon",
  "nutritionPerBasis": {
    "calcium_mg": 210.0,
    "carbs_g": 78.1,
    "energy_kcal": 1580.0,
    "fat_g": 4.88,
    "fibre_g": 8.7,
    "folate_ug": 726.0,
    "iron_mg": 29.5,
    "magnesium_mg": 114.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 369.0,
    "potassium_mg": 359.0,
    "protein_g": 11.2,
    "salt_g": 0.86,
    "sat_fat_g": 0.88,
    "sodium_mg": 344.0,
    "sugar_g": 16.7,
    "vitamin_a_ug": 354.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 3.24,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174623",
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
