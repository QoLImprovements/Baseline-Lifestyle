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
  "id": "usda-sr-legacy-173449",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "KRAFT VELVEETA LIGHT Reduced Fat Pasteurized Process Cheese Product",
  "nutritionPerBasis": {
    "calcium_mg": 574.0,
    "carbs_g": 11.8,
    "energy_kcal": 929.0,
    "fat_g": 10.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.14,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1020.0,
    "potassium_mg": 345.0,
    "protein_g": 19.6,
    "salt_g": 3.975,
    "sat_fat_g": 7.1,
    "sodium_mg": 1590.0,
    "sugar_g": 8.5,
    "vitamin_a_ug": 982.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173449",
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
