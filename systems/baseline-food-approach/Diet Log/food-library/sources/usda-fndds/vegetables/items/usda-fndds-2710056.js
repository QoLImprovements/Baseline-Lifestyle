/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Coleslaw, non-lettuce salads",
  "id": "usda-fndds-2710056",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 214.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 107.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pea salad",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 10.6,
    "energy_kcal": 180.0,
    "fat_g": 14.0,
    "fibre_g": 2.7,
    "folate_ug": 38.0,
    "iron_mg": 0.86,
    "magnesium_mg": 14.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 50.0,
    "potassium_mg": 119.0,
    "protein_g": 2.98,
    "salt_g": 0.6325,
    "sat_fat_g": 2.2,
    "sodium_mg": 253.0,
    "sugar_g": 4.9,
    "vitamin_a_ug": 72.0,
    "vitamin_c_mg": 13.4,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 52.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710056",
  "state": "Unspecified",
  "subcategory": "Coleslaw, non-lettuce salads",
  "tags": [
    "coleslaw-non-lettuce-salads",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
