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
  "id": "usda-sr-legacy-173467",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Fat free ice cream, no sugar added, flavors other than chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 147.0,
    "carbs_g": 28.9,
    "energy_kcal": 557.0,
    "fat_g": 0.0,
    "fibre_g": 7.4,
    "folate_ug": 4.0,
    "iron_mg": 0.0,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 75.0,
    "potassium_mg": 196.0,
    "protein_g": 4.41,
    "salt_g": 0.275,
    "sat_fat_g": 0.0,
    "sodium_mg": 110.0,
    "sugar_g": 8.82,
    "vitamin_a_ug": 133.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173467",
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
