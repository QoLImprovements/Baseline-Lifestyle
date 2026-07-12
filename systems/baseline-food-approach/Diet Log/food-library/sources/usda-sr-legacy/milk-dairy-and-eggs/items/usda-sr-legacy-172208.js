/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "container-6-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172208",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "container-6-oz",
      "kind": "unit",
      "label": "container (6 oz)"
    }
  ],
  "name": "Yogurt, chocolate, nonfat milk",
  "nutritionPerBasis": {
    "calcium_mg": 88.0,
    "carbs_g": 23.5,
    "energy_kcal": 112.0,
    "fat_g": 0.0,
    "fibre_g": 1.2,
    "folate_ug": 12.0,
    "iron_mg": 0.42,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 166.0,
    "potassium_mg": 339.0,
    "protein_g": 3.53,
    "salt_g": 0.3375,
    "sat_fat_g": 0.0,
    "sodium_mg": 135.0,
    "sugar_g": 15.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172208",
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
