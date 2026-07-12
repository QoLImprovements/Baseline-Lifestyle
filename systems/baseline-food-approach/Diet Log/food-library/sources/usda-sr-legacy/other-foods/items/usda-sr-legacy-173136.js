/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-173136",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Formulated bar, MARS SNACKFOOD US, SNICKERS MARATHON Energy Bar, all flavors",
  "nutritionPerBasis": {
    "calcium_mg": 754.0,
    "carbs_g": 50.3,
    "energy_kcal": 386.0,
    "fat_g": 10.8,
    "fibre_g": 6.7,
    "folate_ug": 816.0,
    "iron_mg": 16.3,
    "magnesium_mg": 317.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 455.0,
    "potassium_mg": 351.0,
    "protein_g": 21.9,
    "salt_g": 0.9575,
    "sat_fat_g": 4.75,
    "sodium_mg": 383.0,
    "sugar_g": 28.7,
    "vitamin_a_ug": 62.0,
    "vitamin_c_mg": 490.0,
    "vitamin_e_mg": 27.5,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173136",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "other-foods",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
