/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-crumbled",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172224",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 118.0,
      "key": "cup-crumbled",
      "kind": "unit",
      "label": "cup, crumbled"
    }
  ],
  "name": "Cheese, white, queso blanco",
  "nutritionPerBasis": {
    "calcium_mg": 690.0,
    "carbs_g": 2.53,
    "energy_kcal": 1300.0,
    "fat_g": 24.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.18,
    "magnesium_mg": 29.0,
    "omega3_g": 0.132,
    "phosphorus_mg": 467.0,
    "potassium_mg": 126.0,
    "protein_g": 20.4,
    "salt_g": 1.76,
    "sat_fat_g": 13.7,
    "sodium_mg": 704.0,
    "sugar_g": 1.76,
    "vitamin_a_ug": 157.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172224",
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
