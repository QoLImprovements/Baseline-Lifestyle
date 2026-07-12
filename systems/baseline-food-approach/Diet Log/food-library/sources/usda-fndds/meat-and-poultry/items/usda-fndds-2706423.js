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
  "id": "usda-fndds-2706423",
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
  "name": "Spaghetti sauce with poultry and added vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 6.05,
    "energy_kcal": 71.0,
    "fat_g": 2.39,
    "fibre_g": 1.4,
    "folate_ug": 15.0,
    "iron_mg": 0.75,
    "magnesium_mg": 19.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 79.0,
    "potassium_mg": 312.0,
    "protein_g": 6.39,
    "salt_g": 0.8275,
    "sat_fat_g": 0.476,
    "sodium_mg": 331.0,
    "sugar_g": 4.03,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 9.8,
    "vitamin_e_mg": 1.63,
    "vitamin_k_ug": 9.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706423",
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
