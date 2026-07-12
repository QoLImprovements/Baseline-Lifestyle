/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-5-cup",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170851",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 246.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cheese, ricotta, whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 206.0,
    "carbs_g": 7.27,
    "energy_kcal": 627.0,
    "fat_g": 10.2,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.13,
    "magnesium_mg": 20.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 154.0,
    "potassium_mg": 219.0,
    "protein_g": 7.54,
    "salt_g": 0.275,
    "sat_fat_g": 6.42,
    "sodium_mg": 110.0,
    "sugar_g": 0.27,
    "vitamin_a_ug": 120.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170851",
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
