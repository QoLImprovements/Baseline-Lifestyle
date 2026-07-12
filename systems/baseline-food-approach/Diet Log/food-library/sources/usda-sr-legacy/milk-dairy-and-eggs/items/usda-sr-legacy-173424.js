/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "tbsp",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-173424",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.5,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    }
  ],
  "name": "Egg, whole, cooked, hard-boiled",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 1.12,
    "energy_kcal": 649.0,
    "fat_g": 10.6,
    "fibre_g": 0.0,
    "folate_ug": 44.0,
    "iron_mg": 1.19,
    "magnesium_mg": 10.0,
    "omega3_g": 0.043,
    "phosphorus_mg": 172.0,
    "potassium_mg": 126.0,
    "protein_g": 12.6,
    "salt_g": 0.31,
    "sat_fat_g": 3.27,
    "sodium_mg": 124.0,
    "sugar_g": 1.12,
    "vitamin_a_ug": 149.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.03,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173424",
  "state": "Boiled",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "boiled",
    "dairy-and-egg-products",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
