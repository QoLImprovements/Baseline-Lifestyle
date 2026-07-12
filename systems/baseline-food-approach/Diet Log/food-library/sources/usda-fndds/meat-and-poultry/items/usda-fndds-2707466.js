/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-tablespoon",
  "description": "Bacon",
  "id": "usda-fndds-2707466",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Bacon bits",
  "nutritionPerBasis": {
    "calcium_mg": 101.0,
    "carbs_g": 28.6,
    "energy_kcal": 476.0,
    "fat_g": 25.9,
    "fibre_g": 10.2,
    "folate_ug": 127.0,
    "iron_mg": 0.72,
    "magnesium_mg": 95.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 217.0,
    "potassium_mg": 145.0,
    "protein_g": 32.0,
    "salt_g": 4.425,
    "sat_fat_g": 4.06,
    "sodium_mg": 1770.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 6.9,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707466",
  "state": "Unspecified",
  "subcategory": "Bacon",
  "tags": [
    "bacon",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
