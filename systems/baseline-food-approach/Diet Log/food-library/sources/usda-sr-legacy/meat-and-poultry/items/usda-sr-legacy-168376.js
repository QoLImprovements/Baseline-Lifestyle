/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168376",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    },
    {
      "gramsPerUnit": 1071.0,
      "key": "ribs",
      "kind": "unit",
      "label": "ribs"
    }
  ],
  "name": "Pork loin, fresh, backribs, bone-in, raw, lean only",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 0.0,
    "energy_kcal": 719.0,
    "fat_g": 9.84,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.84,
    "magnesium_mg": 17.0,
    "omega3_g": 0.064,
    "phosphorus_mg": 165.0,
    "potassium_mg": 268.0,
    "protein_g": 20.8,
    "salt_g": 0.2375,
    "sat_fat_g": 3.48,
    "sodium_mg": 95.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168376",
  "state": "Raw",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
