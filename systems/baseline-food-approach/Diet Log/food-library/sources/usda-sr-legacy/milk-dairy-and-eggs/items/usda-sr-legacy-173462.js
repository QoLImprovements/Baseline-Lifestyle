/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-25-cup",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-173462",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Egg substitute, liquid or frozen, fat free",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 2.0,
    "energy_kcal": 201.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 16.0,
    "iron_mg": 1.98,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 72.0,
    "potassium_mg": 213.0,
    "protein_g": 10.0,
    "salt_g": 0.4975,
    "sat_fat_g": 0.0,
    "sodium_mg": 199.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 1.59,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173462",
  "state": "Frozen",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "frozen",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
