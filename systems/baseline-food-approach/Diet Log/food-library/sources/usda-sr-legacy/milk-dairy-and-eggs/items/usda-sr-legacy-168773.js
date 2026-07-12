/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-5-cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-168773",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 141.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Egg custards, dry mix, prepared with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 139.0,
    "carbs_g": 17.6,
    "energy_kcal": 122.0,
    "fat_g": 4.0,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.34,
    "magnesium_mg": 16.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 130.0,
    "potassium_mg": 207.0,
    "protein_g": 3.99,
    "salt_g": 0.21,
    "sat_fat_g": 2.03,
    "sodium_mg": 84.0,
    "sugar_g": 4.82,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168773",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "milk-dairy-and-eggs",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
