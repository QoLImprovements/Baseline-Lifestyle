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
  "id": "usda-sr-legacy-173009",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 231.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cereals, CREAM OF WHEAT, 2 1/2 minute cook time, cooked with water, microwaved, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 131.0,
    "carbs_g": 10.1,
    "energy_kcal": 219.0,
    "fat_g": 0.37,
    "fibre_g": 0.7,
    "folate_ug": 32.0,
    "iron_mg": 4.98,
    "magnesium_mg": 8.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 57.0,
    "potassium_mg": 26.0,
    "protein_g": 1.88,
    "salt_g": 0.1125,
    "sat_fat_g": 0.099,
    "sodium_mg": 45.0,
    "sugar_g": 0.34,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173009",
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
