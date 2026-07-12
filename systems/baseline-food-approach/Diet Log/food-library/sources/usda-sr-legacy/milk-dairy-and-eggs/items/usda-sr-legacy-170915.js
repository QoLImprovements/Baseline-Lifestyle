/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170915",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Yogurt, Greek, nonfat, Fruit on Bottom, Strawberry, CHOBANI",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 11.9,
    "energy_kcal": 331.0,
    "fat_g": 0.23,
    "fibre_g": 0.4,
    "folate_ug": 0.0,
    "iron_mg": 0.15,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 112.0,
    "potassium_mg": 132.0,
    "protein_g": 7.28,
    "salt_g": 0.0775,
    "sat_fat_g": 0.15,
    "sodium_mg": 31.0,
    "sugar_g": 10.4,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170915",
  "state": "Raw",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
