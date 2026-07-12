/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "Beverages",
  "id": "usda-foundation-1999631",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Almond milk, unsweetened, plain, shelf stable",
  "nutritionPerBasis": {
    "calcium_mg": 173.0,
    "carbs_g": 0.337,
    "energy_kcal": 14.6,
    "fat_g": 1.22,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.29,
    "magnesium_mg": 6.78,
    "omega3_g": 0.001,
    "phosphorus_mg": 29.8,
    "potassium_mg": 30.8,
    "protein_g": 0.555,
    "salt_g": 0.149,
    "sat_fat_g": 0.104,
    "sodium_mg": 59.6,
    "sugar_g": 0.0,
    "vitamin_a_ug": 41.4,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.32,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "1999631",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
