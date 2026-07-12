/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170867",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Dessert topping, pressurized",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 16.1,
    "energy_kcal": 1100.0,
    "fat_g": 22.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.02,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.0,
    "potassium_mg": 19.0,
    "protein_g": 0.98,
    "salt_g": 0.155,
    "sat_fat_g": 18.9,
    "sodium_mg": 62.0,
    "sugar_g": 16.1,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 5.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170867",
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
