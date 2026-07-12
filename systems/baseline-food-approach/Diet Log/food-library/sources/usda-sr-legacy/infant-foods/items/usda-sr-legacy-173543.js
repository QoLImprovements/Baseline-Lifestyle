/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "scoop",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173543",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.7,
      "key": "scoop",
      "kind": "unit",
      "label": "scoop"
    }
  ],
  "name": "Infant formula, ABBOTT NUTRITION, SIMILAC, ISOMIL, with iron, powder, not reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 540.0,
    "carbs_g": 53.6,
    "energy_kcal": 517.0,
    "fat_g": 28.1,
    "fibre_g": 0.0,
    "folate_ug": 77.0,
    "iron_mg": 9.26,
    "magnesium_mg": 39.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 386.0,
    "potassium_mg": 555.0,
    "protein_g": 12.6,
    "salt_g": 0.565,
    "sat_fat_g": 9.17,
    "sodium_mg": 226.0,
    "sugar_g": 53.0,
    "vitamin_a_ug": 462.0,
    "vitamin_c_mg": 46.3,
    "vitamin_e_mg": 5.1,
    "vitamin_k_ug": 56.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173543",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
