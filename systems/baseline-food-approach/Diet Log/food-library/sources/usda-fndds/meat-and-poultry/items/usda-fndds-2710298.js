/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-tablespoon",
  "description": "Mustard and other condiments",
  "id": "usda-fndds-2710298",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-packet",
      "kind": "unit",
      "label": "1 packet"
    }
  ],
  "name": "Duck sauce",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 60.7,
    "energy_kcal": 245.0,
    "fat_g": 0.13,
    "fibre_g": 0.6,
    "folate_ug": 2.0,
    "iron_mg": 0.39,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 87.0,
    "protein_g": 0.36,
    "salt_g": 1.78,
    "sat_fat_g": 0.051,
    "sodium_mg": 712.0,
    "sugar_g": 30.5,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710298",
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
