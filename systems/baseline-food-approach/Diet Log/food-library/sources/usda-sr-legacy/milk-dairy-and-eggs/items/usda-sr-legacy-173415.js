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
  "id": "usda-sr-legacy-173415",
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
    }
  ],
  "name": "Cheese, cheshire",
  "nutritionPerBasis": {
    "calcium_mg": 643.0,
    "carbs_g": 4.78,
    "energy_kcal": 1620.0,
    "fat_g": 30.6,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 0.21,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 464.0,
    "potassium_mg": 95.0,
    "protein_g": 23.4,
    "salt_g": 1.75,
    "sat_fat_g": 19.5,
    "sodium_mg": 700.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 233.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173415",
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
