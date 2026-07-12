/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "cup",
  "description": "Fruits and Fruit Juices",
  "id": "usda-foundation-325287",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 257.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Grapefruit juice, white, canned or bottled, unsweetened",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 7.59,
    "energy_kcal": 157.0,
    "fat_g": 0.7,
    "fibre_g": 0.2,
    "folate_ug": 12.0,
    "iron_mg": 0.07,
    "magnesium_mg": 9.6,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 141.0,
    "protein_g": 0.55,
    "salt_g": 0.0025,
    "sat_fat_g": 0.0,
    "sodium_mg": 1.0,
    "sugar_g": 7.72,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 39.4,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "325287",
  "state": "Canned",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "beverages",
    "canned",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
