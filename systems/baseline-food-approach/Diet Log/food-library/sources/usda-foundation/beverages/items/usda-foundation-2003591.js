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
  "id": "usda-foundation-2003591",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Orange juice, no pulp, not fortified, from concentrate, refrigerated",
  "nutritionPerBasis": {
    "calcium_mg": 12.8,
    "carbs_g": 10.3,
    "energy_kcal": 47.2,
    "fat_g": 0.325,
    "fibre_g": 0.0,
    "folate_ug": 29.8,
    "iron_mg": 0.065,
    "magnesium_mg": 10.6,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.2,
    "potassium_mg": 180.0,
    "protein_g": 0.734,
    "salt_g": 0.013075,
    "sat_fat_g": 0.0,
    "sodium_mg": 5.23,
    "sugar_g": 8.28,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 26.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2003591",
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
