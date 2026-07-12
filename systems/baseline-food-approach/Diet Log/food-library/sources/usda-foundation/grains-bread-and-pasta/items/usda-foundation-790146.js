/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "racc",
  "description": "Cereal Grains and Pasta",
  "id": "usda-foundation-790146",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Flour, bread, white, enriched, unbleached",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 72.8,
    "energy_kcal": 363.0,
    "fat_g": 1.65,
    "fibre_g": 0.0,
    "folate_ug": 145.0,
    "iron_mg": 5.55,
    "magnesium_mg": 35.9,
    "omega3_g": 0.0,
    "phosphorus_mg": 124.0,
    "potassium_mg": 127.0,
    "protein_g": 14.3,
    "salt_g": 0.0075,
    "sat_fat_g": 0.0,
    "sodium_mg": 3.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "790146",
  "state": "Unspecified",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "cereal-grains-and-pasta",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
