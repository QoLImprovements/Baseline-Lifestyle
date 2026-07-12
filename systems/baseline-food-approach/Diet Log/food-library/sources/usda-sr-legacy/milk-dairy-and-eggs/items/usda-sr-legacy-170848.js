/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cubic-inch",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170848",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.3,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "5-package-5-oz",
      "kind": "unit",
      "label": "5 package (5 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cheese, parmesan, hard",
  "nutritionPerBasis": {
    "calcium_mg": 1180.0,
    "carbs_g": 3.22,
    "energy_kcal": 1640.0,
    "fat_g": 25.0,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.82,
    "magnesium_mg": 44.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 694.0,
    "potassium_mg": 92.0,
    "protein_g": 35.8,
    "salt_g": 2.95,
    "sat_fat_g": 14.8,
    "sodium_mg": 1180.0,
    "sugar_g": 0.11,
    "vitamin_a_ug": 207.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170848",
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
