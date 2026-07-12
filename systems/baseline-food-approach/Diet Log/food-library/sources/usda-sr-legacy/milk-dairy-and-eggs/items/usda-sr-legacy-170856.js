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
  "id": "usda-sr-legacy-170856",
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
      "gramsPerUnit": 227.0,
      "key": "package-8-oz",
      "kind": "unit",
      "label": "package (8 oz)"
    }
  ],
  "name": "Cheese food, cold pack, American",
  "nutritionPerBasis": {
    "calcium_mg": 497.0,
    "carbs_g": 8.32,
    "energy_kcal": 1390.0,
    "fat_g": 24.5,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.84,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 400.0,
    "potassium_mg": 363.0,
    "protein_g": 19.7,
    "salt_g": 2.415,
    "sat_fat_g": 15.4,
    "sodium_mg": 966.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 705.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170856",
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
