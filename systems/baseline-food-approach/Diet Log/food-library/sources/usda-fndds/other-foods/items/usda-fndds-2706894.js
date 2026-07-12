/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Burgers",
  "id": "usda-fndds-2706894",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    }
  ],
  "name": "Cheeseburger slider",
  "nutritionPerBasis": {
    "calcium_mg": 167.0,
    "carbs_g": 17.9,
    "energy_kcal": 297.0,
    "fat_g": 16.4,
    "fibre_g": 0.6,
    "folate_ug": 45.0,
    "iron_mg": 2.52,
    "magnesium_mg": 22.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 198.0,
    "potassium_mg": 222.0,
    "protein_g": 18.1,
    "salt_g": 1.0775,
    "sat_fat_g": 6.97,
    "sodium_mg": 431.0,
    "sugar_g": 2.85,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706894",
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
