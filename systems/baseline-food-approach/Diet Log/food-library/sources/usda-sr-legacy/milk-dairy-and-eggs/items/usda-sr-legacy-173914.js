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
  "id": "usda-sr-legacy-173914",
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
    },
    {
      "gramsPerUnit": 183.0,
      "key": "0-75-cup",
      "kind": "unit",
      "label": "0.75 cup"
    }
  ],
  "name": "Cereals, CREAM OF RICE, cooked with water, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 1.0,
    "carbs_g": 11.5,
    "energy_kcal": 218.0,
    "fat_g": 0.1,
    "fibre_g": 0.1,
    "folate_ug": 3.0,
    "iron_mg": 3.96,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 20.0,
    "protein_g": 0.9,
    "salt_g": 0.4325,
    "sat_fat_g": 0.02,
    "sodium_mg": 173.0,
    "sugar_g": 0.04,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173914",
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
