/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "1-fl-oz",
  "description": "Formula, prepared from powder",
  "id": "usda-fndds-2705523",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.5,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    }
  ],
  "name": "Infant formula, Similac Advance, powder, made with tap water",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 6.87,
    "energy_kcal": 66.0,
    "fat_g": 3.62,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.19,
    "magnesium_mg": 5.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 28.0,
    "potassium_mg": 69.0,
    "protein_g": 1.37,
    "salt_g": 0.0475,
    "sat_fat_g": 1.24,
    "sodium_mg": 19.0,
    "sugar_g": 6.87,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 5.9,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705523",
  "state": "Unspecified",
  "subcategory": "Formula, prepared from powder",
  "tags": [
    "formula-prepared-from-powder",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
