/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-174780",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Formulated bar, MARS SNACKFOOD US, SNICKERS MARATHON Chewy Chocolate Peanut Bar",
  "nutritionPerBasis": {
    "calcium_mg": 965.0,
    "carbs_g": 47.2,
    "energy_kcal": 396.0,
    "fat_g": 13.1,
    "fibre_g": 2.5,
    "folate_ug": 727.0,
    "iron_mg": 0.0,
    "magnesium_mg": 255.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 455.0,
    "potassium_mg": 0.0,
    "protein_g": 24.3,
    "salt_g": 1.155,
    "sat_fat_g": 4.73,
    "sodium_mg": 462.0,
    "sugar_g": 32.9,
    "vitamin_a_ug": 3640.0,
    "vitamin_c_mg": 144.0,
    "vitamin_e_mg": 24.6,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174780",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "nuts-and-seeds",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
