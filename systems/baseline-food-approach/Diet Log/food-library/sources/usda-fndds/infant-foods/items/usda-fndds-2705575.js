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
  "id": "usda-fndds-2705575",
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
  "name": "Infant formula, Gerber Good Start Soy, Stage 1, powder, made with tap water",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 7.12,
    "energy_kcal": 64.0,
    "fat_g": 3.28,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.15,
    "magnesium_mg": 8.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 40.0,
    "potassium_mg": 74.0,
    "protein_g": 1.6,
    "salt_g": 0.0725,
    "sat_fat_g": 1.41,
    "sodium_mg": 29.0,
    "sugar_g": 5.69,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 7.7,
    "vitamin_e_mg": 0.94,
    "vitamin_k_ug": 5.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705575",
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
