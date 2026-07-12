/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cup-pieces",
  "description": "Tortillas",
  "id": "usda-fndds-2707818",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-cup-pieces",
      "kind": "unit",
      "label": "1 cup (pieces)"
    },
    {
      "gramsPerUnit": 47.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 47.0,
      "key": "1-shell-3-4-dia",
      "kind": "unit",
      "label": "1 shell (3 - 4\" dia)"
    }
  ],
  "name": "Gordita/sope shell, plain, no filling",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 37.2,
    "energy_kcal": 260.0,
    "fat_g": 11.2,
    "fibre_g": 2.9,
    "folate_ug": 77.0,
    "iron_mg": 3.7,
    "magnesium_mg": 39.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 98.0,
    "potassium_mg": 115.0,
    "protein_g": 3.85,
    "salt_g": 0.94,
    "sat_fat_g": 2.18,
    "sodium_mg": 376.0,
    "sugar_g": 0.72,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.14,
    "vitamin_k_ug": 6.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707818",
  "state": "Unspecified",
  "subcategory": "Tortillas",
  "tags": [
    "other-foods",
    "tortillas",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
