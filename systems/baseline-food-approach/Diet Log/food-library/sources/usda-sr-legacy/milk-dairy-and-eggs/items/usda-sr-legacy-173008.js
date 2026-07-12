/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173008",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cereals, CREAM OF WHEAT, 2 1/2 minute cook time, cooked with water, stove-top, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 104.0,
    "carbs_g": 11.7,
    "energy_kcal": 56.0,
    "fat_g": 0.2,
    "fibre_g": 0.7,
    "folate_ug": 29.0,
    "iron_mg": 4.09,
    "magnesium_mg": 7.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 47.0,
    "potassium_mg": 23.0,
    "protein_g": 1.44,
    "salt_g": 0.085,
    "sat_fat_g": 0.051,
    "sodium_mg": 34.0,
    "sugar_g": 0.07,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173008",
  "state": "Cooked",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "cooked",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
