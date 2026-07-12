/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "package-3-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171250",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "package-3-oz",
      "kind": "unit",
      "label": "package (3 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cheese, roquefort",
  "nutritionPerBasis": {
    "calcium_mg": 662.0,
    "carbs_g": 2.0,
    "energy_kcal": 1540.0,
    "fat_g": 30.6,
    "fibre_g": 0.0,
    "folate_ug": 49.0,
    "iron_mg": 0.56,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 392.0,
    "potassium_mg": 91.0,
    "protein_g": 21.5,
    "salt_g": 4.525,
    "sat_fat_g": 19.3,
    "sodium_mg": 1810.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 294.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171250",
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
