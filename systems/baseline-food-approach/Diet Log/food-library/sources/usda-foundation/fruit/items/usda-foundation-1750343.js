/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "racc",
  "description": "Fruits and Fruit Juices",
  "id": "usda-foundation-1750343",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Apples, honeycrisp, with skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 3.87,
    "carbs_g": 14.7,
    "energy_kcal": 60.0,
    "fat_g": 0.1,
    "fibre_g": 1.72,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 4.15,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.85,
    "potassium_mg": 98.0,
    "protein_g": 0.102,
    "salt_g": 0.000345,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.138,
    "sugar_g": 12.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "1750343",
  "state": "Raw",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fruit",
    "fruits-and-fruit-juices",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
