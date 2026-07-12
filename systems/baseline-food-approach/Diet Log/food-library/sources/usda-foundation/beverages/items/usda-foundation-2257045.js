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
  "id": "usda-foundation-2257045",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Almond milk, unsweetened, plain, refrigerated",
  "nutritionPerBasis": {
    "calcium_mg": 158.0,
    "carbs_g": 0.671,
    "energy_kcal": 19.3,
    "fat_g": 1.56,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.125,
    "magnesium_mg": 8.25,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.1,
    "potassium_mg": 49.3,
    "protein_g": 0.656,
    "salt_g": 0.148,
    "sat_fat_g": 0.0,
    "sodium_mg": 59.2,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2257045",
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
