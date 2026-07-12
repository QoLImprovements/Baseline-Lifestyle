/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pasta sauces, tomato-based",
  "id": "usda-fndds-2706470",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Spaghetti sauce with meat",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 6.54,
    "energy_kcal": 90.0,
    "fat_g": 4.36,
    "fibre_g": 1.5,
    "folate_ug": 12.0,
    "iron_mg": 1.1,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 64.0,
    "potassium_mg": 316.0,
    "protein_g": 5.94,
    "salt_g": 1.03,
    "sat_fat_g": 1.35,
    "sodium_mg": 412.0,
    "sugar_g": 4.47,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 1.97,
    "vitamin_k_ug": 11.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706470",
  "state": "Unspecified",
  "subcategory": "Pasta sauces, tomato-based",
  "tags": [
    "meat-and-poultry",
    "pasta-sauces-tomato-based",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
