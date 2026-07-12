/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Mustard and other condiments",
  "id": "usda-fndds-2709754",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Puerto Rican seasoning with ham",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 7.24,
    "energy_kcal": 266.0,
    "fat_g": 24.8,
    "fibre_g": 1.6,
    "folate_ug": 17.0,
    "iron_mg": 0.76,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 247.0,
    "protein_g": 3.96,
    "salt_g": 1.1675,
    "sat_fat_g": 5.45,
    "sodium_mg": 467.0,
    "sugar_g": 3.07,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 35.3,
    "vitamin_e_mg": 4.01,
    "vitamin_k_ug": 17.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709754",
  "state": "Unspecified",
  "subcategory": "Mustard and other condiments",
  "tags": [
    "meat-and-poultry",
    "mustard-and-other-condiments",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
