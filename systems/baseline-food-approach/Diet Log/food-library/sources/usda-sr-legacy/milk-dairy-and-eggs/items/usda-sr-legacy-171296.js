/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "5-3-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171296",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "5-3-oz",
      "kind": "unit",
      "label": "5.3 oz"
    }
  ],
  "name": "Yogurt, Greek, nonfat, vanilla, CHOBANI",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 8.09,
    "energy_kcal": 71.0,
    "fat_g": 0.22,
    "fibre_g": 0.3,
    "folate_ug": 0.0,
    "iron_mg": 0.05,
    "magnesium_mg": 11.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 126.0,
    "potassium_mg": 130.0,
    "protein_g": 9.07,
    "salt_g": 0.09,
    "sat_fat_g": 0.178,
    "sodium_mg": 36.0,
    "sugar_g": 7.61,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171296",
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
