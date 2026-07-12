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
  "id": "usda-sr-legacy-170845",
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
      "gramsPerUnit": 112.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup, shredded"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "6-slices",
      "kind": "unit",
      "label": "6 slices"
    }
  ],
  "name": "Cheese, mozzarella, whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 505.0,
    "carbs_g": 2.4,
    "energy_kcal": 1250.0,
    "fat_g": 22.1,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.44,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 354.0,
    "potassium_mg": 76.0,
    "protein_g": 22.2,
    "salt_g": 1.215,
    "sat_fat_g": 13.9,
    "sodium_mg": 486.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 179.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170845",
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
