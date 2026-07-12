/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Broccoli",
  "id": "usda-fndds-2709573",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Broccoli raab, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 2.88,
    "energy_kcal": 46.0,
    "fat_g": 3.15,
    "fibre_g": 2.7,
    "folate_ug": 63.0,
    "iron_mg": 2.16,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 74.0,
    "potassium_mg": 198.0,
    "protein_g": 3.2,
    "salt_g": 0.3975,
    "sat_fat_g": 0.778,
    "sodium_mg": 159.0,
    "sugar_g": 0.39,
    "vitamin_a_ug": 137.0,
    "vitamin_c_mg": 14.3,
    "vitamin_e_mg": 2.03,
    "vitamin_k_ug": 228.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709573",
  "state": "Cooked",
  "subcategory": "Broccoli",
  "tags": [
    "broccoli",
    "cooked",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
