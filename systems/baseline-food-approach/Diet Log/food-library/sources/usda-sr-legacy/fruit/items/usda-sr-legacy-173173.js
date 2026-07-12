/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "bottle",
  "description": "Beverages",
  "id": "usda-sr-legacy-173173",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 500.0,
      "key": "bottle",
      "kind": "unit",
      "label": "bottle"
    }
  ],
  "name": "Beverages, FUZE, orange mango, fortified with vitamins A, C, E, B6",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 9.2,
    "energy_kcal": 38.0,
    "fat_g": 0.06,
    "fibre_g": 0.2,
    "folate_ug": 44.0,
    "iron_mg": 0.1,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 192.0,
    "protein_g": 0.68,
    "salt_g": 0.025,
    "sat_fat_g": 0.007,
    "sodium_mg": 10.0,
    "sugar_g": 9.0,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 24.0,
    "vitamin_e_mg": 1.08,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173173",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
