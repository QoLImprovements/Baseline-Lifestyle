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
  "id": "usda-sr-legacy-168832",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Pudding, lemon, dry mix, regular, prepared with sugar, egg yolk and water",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 24.2,
    "energy_kcal": 458.0,
    "fat_g": 1.12,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.13,
    "magnesium_mg": 1.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 16.0,
    "potassium_mg": 6.0,
    "protein_g": 0.65,
    "salt_g": 0.1575,
    "sat_fat_g": 0.382,
    "sodium_mg": 63.0,
    "sugar_g": 13.5,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168832",
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
