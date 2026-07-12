/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Corn",
  "id": "usda-fndds-2709924",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-baby-corn",
      "kind": "unit",
      "label": "1 baby corn"
    }
  ],
  "name": "Corn, canned, reduced sodium, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 14.9,
    "energy_kcal": 66.0,
    "fat_g": 0.83,
    "fibre_g": 1.8,
    "folate_ug": 39.0,
    "iron_mg": 0.39,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 146.0,
    "protein_g": 2.1,
    "salt_g": 0.0325,
    "sat_fat_g": 0.083,
    "sodium_mg": 13.0,
    "sugar_g": 4.46,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709924",
  "state": "Canned",
  "subcategory": "Corn",
  "tags": [
    "canned",
    "corn",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
