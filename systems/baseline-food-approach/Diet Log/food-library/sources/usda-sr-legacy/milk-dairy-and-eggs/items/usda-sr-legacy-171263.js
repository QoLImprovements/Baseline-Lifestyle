/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "tsp",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171263",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 94.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "packet",
      "kind": "unit",
      "label": "packet"
    }
  ],
  "name": "Cream substitute, powdered",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 59.3,
    "energy_kcal": 529.0,
    "fat_g": 32.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.26,
    "magnesium_mg": 1.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 288.0,
    "potassium_mg": 669.0,
    "protein_g": 2.48,
    "salt_g": 0.31,
    "sat_fat_g": 19.1,
    "sodium_mg": 124.0,
    "sugar_g": 7.77,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.26,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171263",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
