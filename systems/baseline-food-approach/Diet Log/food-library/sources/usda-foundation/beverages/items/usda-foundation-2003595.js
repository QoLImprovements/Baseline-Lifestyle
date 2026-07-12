/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "Fruits and Fruit Juices",
  "id": "usda-foundation-2003595",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Grapefruit juice, red, not fortified, not from concentrate, refrigerated",
  "nutritionPerBasis": {
    "calcium_mg": 8.88,
    "carbs_g": 9.1,
    "energy_kcal": 41.1,
    "fat_g": 0.267,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 0.015,
    "magnesium_mg": 7.75,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.6,
    "potassium_mg": 128.0,
    "protein_g": 0.57,
    "salt_g": 0.002575,
    "sat_fat_g": 0.0,
    "sodium_mg": 1.03,
    "sugar_g": 7.12,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 24.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2003595",
  "state": "Unspecified",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "beverages",
    "fruits-and-fruit-juices",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
