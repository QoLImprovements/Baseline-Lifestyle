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
  "id": "usda-sr-legacy-171241",
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
      "gramsPerUnit": 198.0,
      "key": "package-7-oz",
      "kind": "unit",
      "label": "package (7 oz)"
    }
  ],
  "name": "Cheese, gouda",
  "nutritionPerBasis": {
    "calcium_mg": 700.0,
    "carbs_g": 2.22,
    "energy_kcal": 356.0,
    "fat_g": 27.4,
    "fibre_g": 0.0,
    "folate_ug": 21.0,
    "iron_mg": 0.24,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 546.0,
    "potassium_mg": 121.0,
    "protein_g": 24.9,
    "salt_g": 2.0475,
    "sat_fat_g": 17.6,
    "sodium_mg": 819.0,
    "sugar_g": 2.22,
    "vitamin_a_ug": 165.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171241",
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
