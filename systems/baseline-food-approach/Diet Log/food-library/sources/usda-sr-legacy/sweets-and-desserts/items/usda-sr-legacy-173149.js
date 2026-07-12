/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-173149",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Formulated bar, high fiber, chewy, oats and chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 250.0,
    "carbs_g": 69.8,
    "energy_kcal": 1630.0,
    "fat_g": 10.0,
    "fibre_g": 22.5,
    "folate_ug": 35.0,
    "iron_mg": 0.9,
    "magnesium_mg": 190.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 419.0,
    "potassium_mg": 447.0,
    "protein_g": 5.0,
    "salt_g": 0.5925,
    "sat_fat_g": 3.4,
    "sodium_mg": 237.0,
    "sugar_g": 25.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 1.47,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173149",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
