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
  "id": "usda-fndds-2705566",
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
  "name": "Infant formula, Enfamil ProSobee, powder, made with tap water",
  "nutritionPerBasis": {
    "calcium_mg": 71.0,
    "carbs_g": 7.07,
    "energy_kcal": 66.0,
    "fat_g": 3.49,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.23,
    "magnesium_mg": 6.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 45.0,
    "potassium_mg": 79.0,
    "protein_g": 1.64,
    "salt_g": 0.0675,
    "sat_fat_g": 1.46,
    "sodium_mg": 27.0,
    "sugar_g": 6.86,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 7.9,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 6.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705566",
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
