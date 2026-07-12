/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "container",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-173463",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "container",
      "kind": "unit",
      "label": "container"
    }
  ],
  "name": "Yogurt, vanilla flavor, lowfat milk, sweetened with low calorie sweetener",
  "nutritionPerBasis": {
    "calcium_mg": 171.0,
    "carbs_g": 13.8,
    "energy_kcal": 86.0,
    "fat_g": 1.25,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.07,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 135.0,
    "potassium_mg": 219.0,
    "protein_g": 4.93,
    "salt_g": 0.165,
    "sat_fat_g": 0.752,
    "sodium_mg": 66.0,
    "sugar_g": 5.43,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173463",
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
