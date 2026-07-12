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
  "id": "usda-fndds-2705572",
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
  "name": "Infant formula, Similac Isomil Soy, powder, made with baby water",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 6.73,
    "energy_kcal": 65.0,
    "fat_g": 3.53,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.16,
    "magnesium_mg": 5.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 48.0,
    "potassium_mg": 70.0,
    "protein_g": 1.58,
    "salt_g": 0.07,
    "sat_fat_g": 1.15,
    "sodium_mg": 28.0,
    "sugar_g": 6.65,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 5.8,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 7.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705572",
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
