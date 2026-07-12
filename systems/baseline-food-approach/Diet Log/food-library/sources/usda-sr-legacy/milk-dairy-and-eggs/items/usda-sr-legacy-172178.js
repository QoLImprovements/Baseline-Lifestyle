/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172178",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 246.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "wedge-1-33-oz",
      "kind": "unit",
      "label": "wedge (1.33 oz)"
    }
  ],
  "name": "Cheese, camembert",
  "nutritionPerBasis": {
    "calcium_mg": 388.0,
    "carbs_g": 0.46,
    "energy_kcal": 1250.0,
    "fat_g": 24.3,
    "fibre_g": 0.0,
    "folate_ug": 62.0,
    "iron_mg": 0.33,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 347.0,
    "potassium_mg": 187.0,
    "protein_g": 19.8,
    "salt_g": 2.105,
    "sat_fat_g": 15.3,
    "sodium_mg": 842.0,
    "sugar_g": 0.46,
    "vitamin_a_ug": 241.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172178",
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
