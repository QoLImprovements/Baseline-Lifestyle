/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "quantity-not-specified",
  "description": "Margarine",
  "id": "usda-fndds-2710163",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Butter replacement, powder",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 89.0,
    "energy_kcal": 373.0,
    "fat_g": 1.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 2.0,
    "protein_g": 2.0,
    "salt_g": 3.0,
    "sat_fat_g": 0.589,
    "sodium_mg": 1200.0,
    "sugar_g": 5.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710163",
  "state": "Unspecified",
  "subcategory": "Margarine",
  "tags": [
    "margarine",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
