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
  "id": "usda-foundation-2003597",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Orange juice, no pulp, not fortified, not from concentrate, refrigerated",
  "nutritionPerBasis": {
    "calcium_mg": 9.29,
    "carbs_g": 10.0,
    "energy_kcal": 46.5,
    "fat_g": 0.356,
    "fibre_g": 0.0,
    "folate_ug": 29.0,
    "iron_mg": 0.071,
    "magnesium_mg": 10.3,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 183.0,
    "protein_g": 0.812,
    "salt_g": 0.000187,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.075,
    "sugar_g": 8.08,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 30.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2003597",
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
