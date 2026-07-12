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
  "id": "usda-sr-legacy-173465",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Ice cream, soft serve, chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 131.0,
    "carbs_g": 22.2,
    "energy_kcal": 222.0,
    "fat_g": 13.0,
    "fibre_g": 0.7,
    "folate_ug": 9.0,
    "iron_mg": 0.21,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 116.0,
    "potassium_mg": 177.0,
    "protein_g": 4.1,
    "salt_g": 0.1525,
    "sat_fat_g": 7.46,
    "sodium_mg": 61.0,
    "sugar_g": 21.2,
    "vitamin_a_ug": 162.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173465",
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
