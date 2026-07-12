/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-hamburger",
  "description": "Burgers",
  "id": "usda-fndds-2706924",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-hamburger",
      "kind": "unit",
      "label": "1 hamburger"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Hamburger (McDonalds)",
  "nutritionPerBasis": {
    "calcium_mg": 116.0,
    "carbs_g": 29.6,
    "energy_kcal": 263.0,
    "fat_g": 10.2,
    "fibre_g": 1.8,
    "folate_ug": 46.0,
    "iron_mg": 2.87,
    "magnesium_mg": 22.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 110.0,
    "potassium_mg": 197.0,
    "protein_g": 13.3,
    "salt_g": 1.2175,
    "sat_fat_g": 3.57,
    "sodium_mg": 487.0,
    "sugar_g": 5.95,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706924",
  "state": "Unspecified",
  "subcategory": "Burgers",
  "tags": [
    "burgers",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
