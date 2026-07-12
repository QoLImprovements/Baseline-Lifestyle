/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "item",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173323",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 254.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "Fast foods, bagel, with breakfast steak, egg, cheese, and condiments",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 23.0,
    "energy_kcal": 282.0,
    "fat_g": 14.1,
    "fibre_g": 0.2,
    "folate_ug": 47.0,
    "iron_mg": 2.06,
    "magnesium_mg": 22.0,
    "omega3_g": 0.047,
    "phosphorus_mg": 204.0,
    "potassium_mg": 145.0,
    "protein_g": 16.0,
    "salt_g": 1.605,
    "sat_fat_g": 5.42,
    "sodium_mg": 642.0,
    "sugar_g": 2.97,
    "vitamin_a_ug": 83.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173323",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
