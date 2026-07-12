/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-bar",
  "description": "Nutrition bars",
  "id": "usda-fndds-2708124",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Nutrition bar (South Beach Living High Protein Bar)",
  "nutritionPerBasis": {
    "calcium_mg": 322.0,
    "carbs_g": 38.4,
    "energy_kcal": 412.0,
    "fat_g": 15.2,
    "fibre_g": 7.3,
    "folate_ug": 184.0,
    "iron_mg": 5.4,
    "magnesium_mg": 71.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 445.0,
    "potassium_mg": 793.0,
    "protein_g": 30.3,
    "salt_g": 1.09,
    "sat_fat_g": 3.38,
    "sodium_mg": 436.0,
    "sugar_g": 15.2,
    "vitamin_a_ug": 391.0,
    "vitamin_c_mg": 27.9,
    "vitamin_e_mg": 4.61,
    "vitamin_k_ug": 351.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708124",
  "state": "Unspecified",
  "subcategory": "Nutrition bars",
  "tags": [
    "nutrition-bars",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
